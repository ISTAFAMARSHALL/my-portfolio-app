import Image from "next/image";
import Link from 'next/link';
import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'
import styles from './page.module.css'; // Adjust the path as necessary


// export const metadata = {

//     title: "All Projects",
//     description: "View all projects created by developer Istafa A. Marshall",
    
// }
  
// export default function ProjectsPage() {

//     const items = [
//         {
//             title: "Smart Buy",
//             slug: "smart-buy",
//             description: "Best Buy Clone",
//             role_contributions: "Created App",
//             technology: "React, Ruby on Rails",
//             links: "",
//             screenshots: smartBuyImg
//         },
//         {
//             title: "S.T.I.M.S",
//             slug: "stims",
//             description: "Educational app",
//             role_contributions: "Created App",
//             technology: "React, Ruby on Rails",
//             links: "",
//             screenshots: stimsimg
//         },
//         {
//             title: "Maybelline Catelog Collection",
//             slug: "maybelline-catelog-collection",
//             description: "Mark up Tracker",
//             role_contributions: "Created App",
//             technology: "React, Ruby on Rails",
//             links: "",
//             screenshots: maybellineImg
//         },
//         {
//             title: "Reservation App",
//             slug: "reservation-app",
//             description: "Restaurant Tracker",
//             role_contributions: "Created App",
//             technology: "React, Ruby on Rails",
//             links: "",
//             screenshots: reservationappImg
//         }
//     ]

//     return (
//         <div style={{}} >
//             <h2 style={{ textAlign:'center' , fontSize:'30px' , fontWeight:'bold' , marginTop: '-70px'}}
//             >All Projects</h2>
            
//             {items.map((item) => {
//                 return (
//                     <ul key={item.title} >
//                         <h1>{item.title}</h1>
                        
//                         <Image
//                             src={item.screenshots}
//                             width={44}
//                             height={44}
//                             alt={item.title}
//                         />

//                         <Link href={`/projects/${item.slug}`}> View App Details</Link>

//                     </ul>
//                 )
//             })}
//         </div>
//     )
// }

// import Image from "next/image";
// import Link from 'next/link';
// import smartBuyImg from '@/public/images/SmartBuy Screenshot.jpeg'
// import stimsimg from '@/public/images/S.T.I.M.S Screenshot.jpeg'
// import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg'
// import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg'
// import styles from './projects-page.module.css'; // Adjust the path as necessary

export const metadata = {
    title: "All Projects",
    description: "View all projects created by developer Istafa A. Marshall",
}

const items = [
    {
        title: "Smart Buy",
        slug: "smart-buy",
        description: "Smart Buy is an innovative e-commerce platform inspired by Best Buy, designed to deliver an exceptional online shopping experience.",
        role_contributions: "Created App",
        technology: "React, Ruby on Rails,",
        links: "",
        screenshots: smartBuyImg
    },
    {
        title: "S.T.I.M.S",
        slug: "stims",
        description: "S.T.I.M.S (Student Teacher Integrated Management System) is an advanced educational management tool optimized for seamless teacher-student interaction and academic tracking.",
        role_contributions: "Created App",
        technology: "React, Ruby on Rails",
        links: "",
        screenshots: stimsimg
    },
    {
        title: "Maybelline Catelog Collection",
        slug: "maybelline-catelog-collection",
        description: "The Maybelline Catalog Collection app is designed to offer users a seamless and engaging experience in managing their favorite Maybelline products.",
        role_contributions: "Created App",
        technology: "React, Ruby on Rails",
        links: "",
        screenshots: maybellineImg
    },
    {
        title: "Reservation App",
        slug: "reservation-app",
        description: "The Reservation App is a comprehensive platform designed to simplify the process of managing restaurant reservations.",
        role_contributions: "Created App",
        technology: "React, Ruby on Rails",
        links: "",
        screenshots: reservationappImg
    }
]

export default function ProjectsPage() {

    return (
        <div className={styles.container} >
            <h2 style={{ textAlign:'center' , fontSize:'45px', fontWeight:'bold'}}>All Projects</h2>
            
            <ul className={styles.projectList}>
                {items.map((item) => (
                    <li key={item.title} className={styles.projectItem} 
                    style={{ 
                        border: '1px solid slategray', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                        padding: '20px', 
                        margin: '20px', 
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        borderRadius: '5px',
                        hover: {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        } 
                    }}>
                        <h1 style={{ textAlign:'center' , fontSize:'26px' , fontWeight:'bolder', margin: '10px'}} >{item.title}</h1>

                        <div className={styles.imageContainer}>
                            <Image 
                                style={{width: 'auto' , height: 'auto'}}
                                src={item.screenshots}
                                width={200} // Adjusted for visibility
                                height={200} // Adjusted for visibility
                                alt={item.title}
                                priority
                            />
                        </div>

                        <p style={{margin: '20px'}}>
                        {item.description}
                        </p>
                        
                        <a style={{marginLeft: '5px'}}
                            className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
                            href={`/projects/${item.slug}`}
                        >
                            View App Details
                        </a>
                        {/* <Link  href={`/projects/${item.slug}`}>View App Details</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
