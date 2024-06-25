import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Newsletter from "@/components/Newsletter";
import BagdeIcons from "@/components/ui/badges";

export const metadata = {
  title: "Home - DevFolio",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
      <Experience />
      < BagdeIcons />
      <Tutorials />
      <Articles />
      <SideHustles />
      <Recommendations />
      <Newsletter />
    </>
  );
}