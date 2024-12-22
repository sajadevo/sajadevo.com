// @types
import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "priority",
      type: "number",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "path",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      options: ["ongoing", "completed"],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
