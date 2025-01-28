"use client";

import React from "react";

// @components
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";

// @icons
import { RiCheckboxCircleLine, RiLoader2Line } from "@remixicon/react";

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

export function ContactForm() {
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
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Input
          placeholder="Your name"
          isError={Boolean(errors.name?.message)}
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
        )}
      </div>
      <div className="mb-6">
        <Input
          type="email"
          placeholder="Your email"
          isError={Boolean(errors.email?.message)}
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
        )}
      </div>
      <div className="mb-6">
        <Textarea
          placeholder="Your message"
          rows={8}
          isError={Boolean(errors.message?.message)}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message?.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className={cn("w-full", {
          "pointer-events-none border-green-600 bg-green-600": isSuccess,
        })}
      >
        {isSuccess && <RiCheckboxCircleLine className="mx-auto size-5" />}
        {isLoading && <RiLoader2Line className="mx-auto size-5 animate-spin" />}
        {!isLoading && !isSuccess && "Send Message"}
      </Button>
      {error && (
        <p className="mt-6 text-center text-sm text-red-600">{error}</p>
      )}
    </form>
  );
}
