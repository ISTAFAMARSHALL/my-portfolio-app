import Image from 'next/image';

import flatIronImg from '@/public/images/id69leq3tX_1719602564623.png'
import codebyistafImg from '@/public/images/C65EE828-4A30-462F-97EB-20BD146599E1_4_5005_c.jpeg'
import ascentUpImg from '@/public/images/AscentUP_logo_161x40.png'

const SvgFlatironSchool = () => (
    <Image src={flatIronImg} alt={flatIronImg.src}  width={40} height={40} className="shrink-0 w-10 h-10 rounded-full"/>
);

const SvgCodeByIstafa= () => (
  <Image src={codebyistafImg} alt={codebyistafImg.src} width={80} height={80} className="shrink-0 w-10 h-10 rounded-full"/>
);

const SvgAscentUp= () => (
  <Image src={ascentUpImg} alt={ascentUpImg.src} width={80} height={80} className=" bg-white w-10 h-5 rounded-full"/>
);

export default function Experience() {
  const items = [
    {
      title: "Software Developer Intern | AscentUp",
      link: "#0",
      icon: <SvgAscentUp />,
      date: "July 2024 - September 2024",
      location: "Remote",
      description:[
        "Built a Next.js web application as part of a digital tech project, focusing on enhancing functionality and user engagement.",
        "Integrated third-party API MailJet, optimizing performance for seamless email communications.",
        "Worked in a collaborative environment, delivering milestones ahead of schedule."
      ]
    },
    {
      title: "Software Developer | Code by Istafa",
      link: "#0",
      icon: <SvgCodeByIstafa />,
      date: "June 2022 - Present",
      location: "Holtsville, NY",
      description:[
        "Developed custom web applications using Next.js and React, optimizing user experience and performance.",
        "Collaborated with clients to define project goals and deliver tailored solutions.",
        "Managed project timelines, ensuring delivery within deadlines and budget.",
      ]
    },
    {
      title: "Software Engineering Student | Flatiron School",
      link: "#0",
      icon: <SvgFlatironSchool />,
      date: "May 2021 - June 2022",
      location: "New York, NYC",
      description:[
        "Created full-stack applications using JavaScript, Ruby, React, and Rails, applying modern web development techniques.",
        "Contributed to peer reviews and debugging sessions, improving code quality and problem-solving abilities.",
        "Produced technical documentation, demonstrating clear communication of complex concepts.",
      ]

    },
    // {
    //   title: "System Engineer and Web Developer at Vimeo",
    //   link: "#0",
    //   icon: <Svg3 />,
    //   date: "2017 - 2019",
    //   location: "London, UK",
    //   description:
    //     "Setting vision, leadership, processes while directly participating in communications with clients such as eBay, Amazon, X, Twitch, Instagram, and many others.",
    // },
  ];

  return (
    <section style={{marginTop: '-40px'}}>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Experience
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
          >
            <div className="sm:flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5">
                {item.icon}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      // href={''}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600dark:text-gray-400">
                    {item.location}
                  </div>
                </div>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p> */}
                <ul >
                        {item.description.map((bullet, index) => (
                            <div style={{ marginTop: '-15px'}}>
                            <li key={index} style={{ margin: '25px' , textAlign: 'left' , marginLeft:'30px' , listStyle:'outside' }} >{bullet}</li>
                            </div>
                        ))}
                    </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
