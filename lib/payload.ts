// @utils
import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

export async function getProjects() {
  return await payload.find({
    collection: "projects",
  });
}

export async function getExperiences() {
  return await payload.find({
    collection: "experiences",
  });
}
