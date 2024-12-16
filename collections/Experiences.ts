// @types
import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  fields: [
    {
      name: "role",
      type: "text",
    },
    {
      name: "date",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "companyLogo",
      type: "upload",
      relationTo: "media",
    },
  ],
};
