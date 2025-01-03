"use server";

// @components
import { EmailTemplate } from "@/components/email-template";

// @utils
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.RESEND_TO_EMAIL!],
      subject: "New Inquiry from sajadevo.com",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return { error: error.message, sent: false };
    }

    return { error: null, sent: true };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
