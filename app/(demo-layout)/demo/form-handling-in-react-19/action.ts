"use server";

import { z } from "zod";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof LoginFormData]?: string[];
  };
}

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function submitForm(
  prevState: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const rawData: LoginFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validatedData = formSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    return {
      success: true,
      message: "User logged in successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
