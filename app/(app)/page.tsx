// @components
import { Line } from "@/components";
import {
  Hero,
  ProjectsCarousel,
  Story,
  Experience,
  Recommendations,
  Contact,
} from "./components";

export default async function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <Story />
      <Line />
      <Experience />
      <Line />
      <Recommendations />
      <Contact />
    </>
  );
}
