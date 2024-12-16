// @types
import type { CollectionConfig } from "payload";

export const Recommendations: CollectionConfig = {
  slug: "recommendations",
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "feedback",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
