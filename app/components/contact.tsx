"use client";

import React from "react";

// @components
import { Input, Textarea, Button } from "@/components";

// @hooks
import { useForm } from "react-hook-form";

// @utils
import { z } from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

// @actions
import { sendInquiry } from "@/lib/actions";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  message: z.string().min(26, {
    message: "Message must be at least 26 characters long",
  }),
});

export function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const response = await sendInquiry(values);

    if (response.sent) {
      reset();
      setError(null);
      setIsSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setError("Could not send message. Please try again later.");
    }
  }

  return (
    <section className="px-8 pt-8 sm:px-10 sm:pt-10 lg:px-20 lg:pt-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-xl font-normal text-black md:text-2xl">
          Let&apos;s Connect
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="w-full">
              <Input
                placeholder="Your name"
                isError={Boolean(errors.name?.message)}
                {...register("name")}
              />
              {errors.name?.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="email"
                placeholder="Your email"
                isError={Boolean(errors.email?.message)}
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <Textarea
              placeholder="Your message"
              rows={8}
              isError={Boolean(errors.message?.message)}
              {...register("message")}
            />
            {errors.message?.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message?.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className={cn("w-full", {
              "pointer-events-none border-green-600 bg-green-600": isSuccess,
            })}
          >
            {isSuccess && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto size-5"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )}
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto size-5 animate-spin"
              >
                <path d="M12 2v4" />
                <path d="m16.2 7.8 2.9-2.9" />
                <path d="M18 12h4" />
                <path d="m16.2 16.2 2.9 2.9" />
                <path d="M12 18v4" />
                <path d="m4.9 19.1 2.9-2.9" />
                <path d="M2 12h4" />
                <path d="m4.9 4.9 2.9 2.9" />
              </svg>
            )}
            {!isLoading && !isSuccess && "Send Message"}
          </Button>
          {error && (
            <p className="mt-6 text-center text-sm text-red-500">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
