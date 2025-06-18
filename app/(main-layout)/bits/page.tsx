import { BitsPreview } from "@/components/bits-preview";
import { generateMetadata } from "@/lib/utils";
import { formatCode } from "@/lib/format-code";

import { nativeHtmlDialogCode } from "@/code/native-html-dialog";
import { responsiveMenuCode } from "@/code/responsive-menu";
import { animatedTabsCode } from "@/code/animated-tabs";

export const metadata = generateMetadata({
  title: "Sajad ⋅ Bits",
  description:
    "Explore fun ui components and micro-experiments I've built for web development and design",
});

export default async function Bits() {
  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary text-base font-medium text-balance sm:text-lg">
          Code with me
        </h1>
        <p className="text-foreground my-6 text-base text-balance sm:text-lg">
          Explore fun ui components and micro-experiments I've built for web
          development and design
        </p>
      </section>
      <section>
        <div className="container-lg">
          <div className="flex flex-col gap-4 group-has-[[data-pending]]:animate-pulse">
            <BitsPreview
              src="/demo/bits/animated-tabs"
              title="Animated Tabs"
              code={animatedTabsCode}
              formattedCode={await formatCode(animatedTabsCode, "tsx")}
            />
            <BitsPreview
              src="/demo/bits/responsive-menu"
              title="Responsive Menu"
              code={responsiveMenuCode}
              formattedCode={await formatCode(responsiveMenuCode, "tsx")}
            />
            <BitsPreview
              src="/demo/bits/native-html-dialog"
              title="Native HTML Dialog"
              code={nativeHtmlDialogCode}
              formattedCode={await formatCode(nativeHtmlDialogCode, "html")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
