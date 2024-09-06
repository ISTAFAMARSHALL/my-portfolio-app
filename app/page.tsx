import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Header from "@/components/ui/header";
import Badges from '@/components/ui/badges'
import BagdeIcon from "@/components/ui/badge-icons";

export const metadata = {
  title: "My Portfolio - Isafa A Marshall",
  description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
};

export default async function Home() {
  return (
    <>
      <Header/>
      <BagdeIcon/>
      <Experience />
      {/* <Tutorials /> */}
      <Articles />
      {/* <Newsletter /> */}
    </>
  );
}
