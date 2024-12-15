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

import { getProjects } from "@/lib/payload";

export default async function Home() {
  const data = await getProjects();

  console.log(data);
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
