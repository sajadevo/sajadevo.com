// @components
import { Line } from "@/components";
import {
  Hero,
  ProjectsCarousel,
  Story,
  Services,
  Experience,
  Contact,
} from "./components";

export default async function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <Story />
      <Line />
      <Services />
      <Line />
      <Experience />
      <Line />
      {/* <Recommendations /> */}
      <Contact />
    </>
  );
}
