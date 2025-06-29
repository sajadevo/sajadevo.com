"use client";

import React from "react";
import { Loader } from "lucide-react";
import { submitForm, type ActionResponse } from "./action";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function Page() {
  const [state, action, isPending] = React.useActionState(
    submitForm,
    initialState,
  );

  const emailError = state?.errors?.email;
  const passwordError = state?.errors?.password;

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <div className="w-full max-w-80">
        <form action={action} className="w-full space-y-4" autoComplete="off">
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              disabled={isPending}
              data-error={Boolean(emailError)}
              required
            />
            {emailError && (
              <p className="text-sm text-red-600">{emailError[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              disabled={isPending}
              data-error={Boolean(passwordError)}
              required
            />
            {passwordError && (
              <p className="text-sm text-red-600">{passwordError[0]}</p>
            )}
          </div>
          <Button disabled={isPending}>
            {isPending ? (
              <Loader className="mx-auto size-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <div className="bg-secondary/50 text-foreground mt-6 rounded-xl px-4 py-3 text-sm">
          Try submitting the form with password less than 6 characters to see
          the error message.
        </div>
      </div>
    </div>
  );
}

function Input(props: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="flex h-10 w-full items-center rounded-lg border border-black/10 bg-transparent px-3 text-sm font-normal text-black ring-3 ring-transparent transition-all duration-300 outline-none placeholder:text-black/50 focus-within:outline-none hover:border-black hover:bg-transparent hover:ring-black/10 focus:border-black focus:bg-transparent focus:ring-black/10 disabled:pointer-events-none disabled:opacity-70 disabled:select-none data-[error=true]:border-red-500 data-[error=true]:hover:border-red-500 data-[error=true]:hover:ring-red-500/10 data-[error=true]:focus:border-red-500 data-[error=true]:focus:ring-red-500/10"
    />
  );
}

function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="inline-flex h-10 w-full shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-black bg-black px-4 text-center text-sm font-medium whitespace-nowrap text-white transition-all duration-300 hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70 disabled:select-none"
    />
  );
}
