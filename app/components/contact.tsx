// @components
import { Input, Textarea, Button } from "@/components";

export function Contact() {
  return (
    <section className="relative max-w-7xl py-20 mx-auto bg-white border-x border-secondary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl text-black font-medium mb-6">
          Let&apos;s Connect
        </h2>
        <form action="#">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Input placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
          </div>
          <div className="mb-6">
            <Textarea placeholder="Your message" rows={8} />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
