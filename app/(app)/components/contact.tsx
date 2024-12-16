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
import { submitInquiry } from "@/lib/payload";

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

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    const response = await submitInquiry(formData);

    if (response.status === 200) {
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
      setError(response.message);
    }
  }

  return (
    <section className="px-10 pt-10 lg:px-20 lg:pt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-black font-medium mb-6">
          Let&apos;s Connect
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="w-full">
              <Input
                placeholder="Your name"
                isError={Boolean(errors.name?.message)}
                {...register("name")}
              />
              {errors.name?.message && (
                <p className="text-sm text-red-500 mt-2">
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
                <p className="text-sm text-red-500 mt-2">
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
              <p className="text-sm text-red-500 mt-2">
                {errors.message?.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className={cn("w-full", {
              "bg-green-600 border-green-600 pointer-events-none": isSuccess,
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
                className="size-5 mx-auto"
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
                className="size-5 animate-spin mx-auto"
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
            <p className="text-sm text-red-500 mt-6 text-center">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
