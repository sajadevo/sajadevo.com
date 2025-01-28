// @components
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
        <h1 className="text-2xl leading-tight font-semibold text-black sm:text-3xl md:text-4xl">
          Let&apos;s connect
        </h1>
        <p className="text-foreground mt-4 mb-12 text-base text-balance sm:text-lg md:leading-relaxed">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me using the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
