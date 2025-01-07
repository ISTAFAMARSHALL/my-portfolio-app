import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Experience2 from "@/components/experience2";
import Articles from "@/components/Articles";
import Articles2 from "@/components/ui/articles2";
import Newsletter from "@/components/Newsletter";
import Header from "@/components/ui/header";
import Header2 from "@/components/ui/header2"
import Badges from '@/components/ui/badges'
import BagdeIcon from "@/components/ui/badge-icons";
import BagdeIcon2 from "@/components/ui/badge-icon2";

export const metadata = {
  title: "My Portfolio - Isafa A Marshall",
  description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
};

export default async function Home() {
  return (
    <>
      {/* <Header/> */}
      <Header2/>
      <BagdeIcon/>
      <BagdeIcon2/>
      {/* <Experience /> */}
      <Experience2 />
      {/* <Tutorials /> */}
      {/* <Articles /> */}
      <Articles2 />
      {/* <Newsletter /> */}
    </>
  );
}
