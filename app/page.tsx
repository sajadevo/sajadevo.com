// @components
import { Line } from "@/components";
import { Hero, ProjectsCarousel, Story, Experience } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <Story />
      <Line />
      <Experience />
    </>
  );
}
