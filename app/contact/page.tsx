// @components
import { Typography } from "@/components/typography";
import { ContactForm } from "@/components/contact-form";

// @utils
import { generateMetadata } from "@/lib/utils";

export const metadata = generateMetadata({
  title: "Sajad ⋅ Contact Me",
  description: "Get in touch with me for new opportunities and collaborations.",
});

export default function ContactPage() {
  return (
    <div className="grid min-h-[calc(100vh-48px)] place-items-center md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto w-full max-w-xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <Typography variant="h1" asChild>
          <h1>Let&apos;s connect</h1>
        </Typography>
        <Typography className="mt-4 mb-12 text-balance">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me using the form below.
        </Typography>
        <ContactForm />
      </div>
    </div>
  );
}
