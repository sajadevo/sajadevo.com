// @components
import { Line } from "@/components";
import {
  Hero,
  ProjectsCarousel,
  Story,
  Experience,
  Recommendations,
} from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <Story />
      <Line />
      <Experience />
      <Line />
      <Recommendations />
    </>
  );
}
