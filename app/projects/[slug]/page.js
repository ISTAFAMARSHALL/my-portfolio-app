import Image from "next/image";
import Link from 'next/link';
import ImageSlideShow from '@/components/image-slide-show';
import smartBuyImg from '@/public/images/SmartBuy Screenshot .jpeg';
import stimsimg from '@/public/images/S.T.I.M.S Screenshot .jpeg';
import maybellineImg from '@/public/images/Maybelline Catelog Screenshot.jpeg';
import reservationappImg from '@/public/images/Reservation App Screenshot.jpeg';

export default function ProjectDetailsPage(props) {
    const items = [
        {
            title: "Smart Buy",
            slug: "smart-buy",
            description: "Smart Buy is an innovative e-commerce platform inspired by Best Buy, designed to deliver an exceptional online shopping experience. The app boasts an intuitive interface that allows users to easily navigate a comprehensive product catalog. With secure user accounts and efficient order tracking, customers can effortlessly manage their purchases. Developed with React on the front-end and Rails on the back-end, Smart Buy combines speed, reliability, and scalability to meet the demands of modern e-commerce.",
            role_contributions: "Created by Istafa A Marshall",
            technology: [
                "Frontend Development: Crafted with React to provide a dynamic, responsive, and interactive user interface.",
                "Styling: Utilized CSS to create a clean, modern, and user-friendly design, enhancing the overall user experience.",
                "Backend Development: Powered by Rails to efficiently handle complex business logic and ensure secure transactions.",
                "Database Management: Integrated PostgreSQL for robust and scalable data storage, supporting extensive product catalogs and user accounts."
            ],
            link: "",
            demo: "",
            github: '',
            screenshots: smartBuyImg
        },
        {
            title: "S.T.I.M.S",
            slug: "stims",
            description: "S.T.I.M.S (Student Teacher Integrated Management System) is an advanced educational management tool optimized for seamless teacher-student interaction and academic tracking. Designed to offer ease of use akin to Facebook, S.T.I.M.S provides a separate user interface for students and teachers, allowing them to communicate effectively and monitor educational progress. Key features include the ability to view class schedules, access a directory of all students and teachers within the assigned school, and track academic performance. Leveraging React for the frontend and Rails for the backend, S.T.I.M.S ensures a reliable, scalable, and user-friendly platform, making it an invaluable asset for modern educational environments.",
            role_contributions: "Created by Istafa A Marshall",
            technology: [
                "Frontend Development: Developed with React to ensure a dynamic, responsive, and interactive user interface tailored to both students and teachers.",
                "Styling: Utilized CSS to create a clean, modern, and user-friendly design, enhancing usability and engagement.",
                "Backend Development: Built with Rails to efficiently manage complex educational data and ensure secure communication between users.",
                "Database Management: Implemented PostgreSQL for robust and scalable data storage, supporting comprehensive academic tracking and user management.",
            ],
            link: "",
            demo: "",
            github: '',
            screenshots: stimsimg
        },
        {
            title: "Maybelline Catelog Collection",
            slug: "maybelline-catelog-collection",
            description: "Mark up Tracker",
            role_contributions: "Created by Istafa A Marshall",
            technology: "React, Ruby on Rails",
            link: "",
            demo: "",
            github: '',
            screenshots: maybellineImg
        },
        {
            title: "Reservation App",
            slug: "reservation-app",
            description: "Restaurant Tracker",
            role_contributions: "Created by Istafa A Marshall",
            technology: "React, Ruby on Rails",
            link: "",
            demo: "",
            github: '',
            screenshots: reservationappImg
        }
    ];

    let item = items.filter((item) => item.slug === props.params.slug);

    return (
        <>
            {item.map((item) => (
                <div key={item.slug}>
                    {/* <Image src={item.screenshots} alt={item.title} /> */}

                    <h1 style={{ fontSize: '50px', textAlign: 'center' }}>{item.title}</h1>
                    
                    <ImageSlideShow slug={item.slug} fill />

                    <p style={{ margin: '10px', marginTop: '10px', fontFamily: 'cursive', fontSize: '20px', textAlign: 'center' }}>{item.role_contributions}</p>
                    
                    <h1 style={{ textAlign: 'left', fontSize: '20px', marginTop: '40px', textDecorationLine: 'underline' }}>Description</h1>

                    <p style={{margin: '15px' , textAlign: 'justify' , marginTop: '5px' }}>{item.description}</p>
                    <br></br>
                    
                    <br></br>

                    <h1 style={{ textAlign: 'left', fontSize: '20px', textDecorationLine: 'underline' , marginTop: '-20px' }}>Technologies</h1>

                    <ul >
                        {item.technology.map((tech, index) => (
                            <div style={{ marginTop: '-15px'}}>
                            <li key={index} style={{ margin: '25px' , textAlign: 'left' , marginLeft:'30px' , listStyle:'outside' }} >{tech}</li>
                            </div>
                        ))}
                    </ul>

                    <h1 style={{ textAlign: 'left', fontSize: '20px', textDecorationLine: 'underline' , marginTop: '30px'}}>Links</h1>
                    
                    <div style={{ margin: '15px' , listStyle:'outside' , marginTop: '5px'}} >
                        <p>Live Demo:{}</p>
                        <p>Tutorial:{}</p>
                        <p>github:{}</p>
                    </div>


                    
                    <br></br>
                </div>
            ))}
        </>
    );
}
