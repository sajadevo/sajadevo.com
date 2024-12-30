"use server";

// @utils
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

export async function getProjects() {
  return await payload.find({
    collection: "projects",
    limit: 25,
    sort: "-priority",
  });
}

export async function getExperiences() {
  return await payload.find({
    collection: "experiences",
  });
}

export async function submitInquiry(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  if (!name || !email || !message) {
    return {
      status: 500,
      data: null,
      message: "All fields are required",
    };
  }

  const result = await payload.create({
    collection: "inquiries",
    data: {
      name,
      email,
      message,
    },
  });

  return {
    status: 200,
    data: result,
    message: "Inquiry submitted successfully",
  };
}
