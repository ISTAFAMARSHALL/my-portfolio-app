import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import myImg01 from '@/public/images/my-image.jpeg'
import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'
import newerImg from '@/public/images/C65EE828-4A30-462F-97EB-20BD146599E1_4_5005_c.jpeg'


import sqliteImg from '@/public/images/sqlite.svg'

export default function Header() {
  return (
    <header className="text-center pt-6">
      {/* Dark mode toggle */}
      {/* <ThemeToggle /> */}
      {/* Intro */}
      <div className="mb-10">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={newerImg}
          width={58}
          height={48}
          alt="Istafa Anthony Marshall"
          priority
        />

        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Istafa Anthony Marshall
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Frontend developer and from NYC 🇺🇸
          </p>
        </div>
 
        <p>
          From the high-stakes world of Navy missile defense to the dynamic arenas of sales and support leadership, my career is a testament to adaptability and resilience. 
          <br></br>
          <br></br>
          Leveraging over 15 years of customer service expertise and a love for technology. 
          <br></br>
          I excel at crafting compelling user interfaces, sculpted from a customer-centric approach to provide an intuitive and engaging experience for users.
        </p>
        <br></br>
          {/* I've evolved into a Software Developer following my successful completion of Flatiron School. */}
          {/* At Flatiron School, I mastered JavaScript, React, Ruby, and Rails, developing several full-stack applications. */}
          {/* During my tenure as a Territory Manager, I drove and maintained a 40% GOP, demonstrating my ability to deliver impactful results.  */}
        <p>
          My passion lies in contributing my skills in front-end technologies to create visually stunning and user-friendly applications that meet and exceed client expectations. 
          
          {/* With a unique blend of military precision, managerial expertise, and technical prowess, I am ready to bring innovative solutions to a forward-thinking team.  */}
          <br></br>
          <br></br>
          {/* Let's collaborate to drive innovation and achieve remarkable results together. */}
        </p>

        
        <a
          className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          href="#0"
        >
          Available For Work
        </a>
        <br></br>
        <br></br>
      </div>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Projects
      </h2>
      <div className="group flex justify-center gap-4 ">
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={smartBuyImg}
          width={180}
          height={180}
          alt="Smart Buy"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={stimsimg}
          width={180}
          height={180}
          alt="S.T.I.M.S"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={maybellineImg}
          width={180}
          height={180}
          alt="Maybelline Catelog"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={reservationappImg}
          width={180}
          height={180}
          alt="Reservation App"
          priority
        />
      </div>
    </header>
  );
}
