import Image from "next/image";
import Link from 'next/link';
import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'

export default function ProjectDetailsPage (props) {

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

    let item = items.filter((item) => item.slug === props.params.slug)

    return (
        <>
            {item.map((item) => {
                return (
                    <div key={item.slug} style={{textAlign: 'center'}}>
                        <Image
                            src={item.screenshots}
                            alt={item.title}
                        />
                        <h1 style={{ fontSize: '50px'}}>{item.title}</h1>
                        <span>{item.description}</span>
                        <br></br>
                        <span>{item.role_contributions}</span>
                        <br></br>
                        <span>{item.technology}</span>
                        <br></br>
                    </div>
                )
            })}
        </>
    )
}