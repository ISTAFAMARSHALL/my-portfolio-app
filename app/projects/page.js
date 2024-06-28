import Image from "next/image";
import Link from 'next/link';
import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'


export const metadata = {

    title: "All Projects",
    description: "View all projects created by developer Istafa A. Marshall",
    
}
  
  export default function ProjectsPage() {

    const items = [
        {
            title: "Smart Buy",
            slug: "smart-buy",
            description: "Best Buy Clone",
            role_contributions: "Created App",
            technology: "React, Ruby on Rails",
            links: "",
            screenshots: smartBuyImg
        },
        {
            title: "S.T.I.M.S",
            slug: "stims",
            description: "Educational app",
            role_contributions: "Created App",
            technology: "React, Ruby on Rails",
            links: "",
            screenshots: stimsimg
        },
        {
            title: "Maybelline Catelog Collection",
            slug: "maybelline-catelog-collection",
            description: "Mark up Tracker",
            role_contributions: "Created App",
            technology: "React, Ruby on Rails",
            links: "",
            screenshots: maybellineImg
        },
        {
            title: "Reservation App",
            slug: "reservation-app",
            description: "Restaurant Tracker",
            role_contributions: "Created App",
            technology: "React, Ruby on Rails",
            links: "",
            screenshots: reservationappImg
        }
    ]

    return (
        <>
            {items.map((item) => {
                return (
                    <ul key={item.title} >
                        <h1>{item.title}</h1>
                        <Image
                            src={item.screenshots}
                            width={44}
                            height={44}
                            alt={item.title}
                        />
                        <Link href={`/projects/${item.slug}`}> View App Details</Link>

                    </ul>
                )
            })}
        </>
    )
}