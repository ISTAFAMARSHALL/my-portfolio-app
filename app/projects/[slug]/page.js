import ImageSlideShow from '@/components/image-slide-show';
import smartBuyImg from '@/public/images/projects/smart-buy/SmartBuy Screenshot .jpeg'
import stimsimg from '@/public/images/projects/stims/S.T.I.M.S Screenshot .jpeg'
import maybellineImg from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot.jpeg'
import reservationappImg from '@/public/images/projects/reservations/Reservation App Screenshot.jpeg'
import moreThanJustaLunchappImg from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 1.png'

const items = [
    {
        title: "More Than Just a Lunch App",
        slug: "more-than-just-a-lunch-app",
        description: "More Than Just a Lunch App is an intuitive platform designed to streamline the process of managing educational events and gatherings. Built using Next.js and React for the front-end, the app offers a dynamic and responsive user experience. Key features include a visually captivating image slideshow, clear and impactful messaging, and easy navigation for users to quickly access event registration and other relevant information. Integrated with the Mailjet API, the app ensures seamless email communication, making it an all-in-one solution for organizing events with ease and efficiency.",
        role_contributions: "Created by Istafa A Marshall",
        technology: [
            "Front-end Development: Developed using Next.js and React to create a dynamic and responsive user interface, ensuring a seamless user experience.",
            "Styling: Implemented modern CSS techniques for a clean, visually appealing, and user-friendly design.",
            "Functionality: Incorporated features like event registration, user testimonials, and a dynamic image slideshow for a more engaging experience.",
            "Email Integration: Integrated Mailjet API to facilitate smooth and efficient email communication."
        ],
        link: "",
        demo: "https://nww-website-lunch-3.vercel.app/",
        github: "https://github.com/ISTAFAMARSHALL/nww-website3.0",
        screenshots: moreThanJustaLunchappImg
    },
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
        github: "https://github.com/ISTAFAMARSHALL/myCommerceApp",
        screenshots: smartBuyImg
    },
    {
        title: "S.T.I.M.S",
        slug: "stims",
        description: "S.T.I.M.S (Student Teacher Integrated Management System) is an advanced educational management tool optimized for seamless teacher-student interaction and academic tracking. Designed to offer ease of use akin to Facebook, S.T.I.M.S provides a separate user interface for students and teachers, allowing them to communicate effectively and monitor educational progress. Key features include the ability to view class schedules, access a directory of all students and teachers within the assigned school, and track academic performance. Leveraging React for the frontend and Rails for the back-end, S.T.I.M.S ensures a reliable, scalable, and user-friendly platform, making it an invaluable asset for modern educational environments.",
        role_contributions: "Created by Istafa A Marshall",
        technology: [
            "Front-end Development: Developed with React to ensure a dynamic, responsive, and interactive user interface tailored to both students and teachers.",
            "Styling: Utilized CSS to create a clean, modern, and user-friendly design, enhancing usability and engagement.",
            "Back-end Development: Built with Rails to efficiently manage complex educational data and ensure secure communication between users.",
            "Database Management: Implemented PostgreSQL for robust and scalable data storage, supporting comprehensive academic tracking and user management."
        ],
        link: "",
        demo: "",
        github: "https://github.com/ISTAFAMARSHALL/S.T.I.M.S",
        screenshots: stimsimg
    },
    {
        title: "Maybelline Catelog Collection",
        slug: "maybelline-catelog-collection",
        description: "The Maybelline Catalog Collection app is designed to offer users a seamless and engaging experience in managing their favorite Maybelline products. With a dynamic front-end built using React and styled with CSS, the app ensures an intuitive and visually appealing interface. Users can easily view, add, and delete items from their collection, as well as mark their favorite products for quick access. The back-end, powered by a local db.json file, efficiently manages all data interactions, making the app both reliable and efficient. This robust and user-centric application aims to enhance the way users interact with their favorite beauty products, bringing convenience and customization to their fingertips.",
        role_contributions: "Created by Istafa A Marshall",
        technology: [
            "Front-end Development: Built using React to deliver a dynamic and responsive user interface, ensuring smooth and interactive user experiences.",
            "Styling: Implemented with CSS to create a visually appealing and user-friendly design, enhancing the overall usability of the app.",
            "Back-end Management: Utilized a local db.json file to manage data, allowing for efficient handling of product information and user interactions.",
            "Functionality: Enabled features to add, delete, and mark favorites in the collection, providing a comprehensive and customizable user experience."
        ],
        link: "",
        demo: "",
        github: "https://github.com/ISTAFAMARSHALL/maybelline-catalog-collection",
        screenshots: maybellineImg
    },
    {
        title: "Reservation App",
        slug: "reservation-app",
        description: "The Reservation App is a comprehensive platform designed to simplify the process of managing restaurant reservations. Built with a dynamic React front-end and a robust Ruby on Rails back-end, the app offers a seamless and secure user experience. Users can create individual accounts with secure login functionality, view, add, and delete restaurant listings, and manage reservations with ease. The app's clean and modern design, styled with CSS, ensures an intuitive and visually appealing interface. By streamlining the reservation process, the Reservation App provides a convenient and efficient solution for both users and restaurant owners, enhancing the overall dining experience.",
        role_contributions: "Created by Istafa A Marshall",
        technology: [
            "Front-end Development: Developed using React to create a dynamic and responsive user interface, ensuring a seamless user experience.",
            "Styling: Utilized CSS for a clean, modern, and user-friendly design, enhancing visual appeal and usability.",
            "Back-end Development: Built with Ruby on Rails to manage complex data processing and ensure secure user authentication and data transactions.",
            "Functionality: Implemented features for users to securely log in, view, add, and delete restaurants, as well as create and manage reservations at various locations."
        ],
        link: "",
        demo: "",
        github: "https://github.com/ISTAFAMARSHALL/reservation-app",
        screenshots: reservationappImg
    }
];


export async function generateMetadata({params}) {

    let item =  items.find((item) => item.slug === params.slug);
    
    return{
        title: item.title,
        description: item.description,
       
    }
}


export default function ProjectDetailsPage(props) {
    

    let item = items.filter((item) => item.slug === props.params.slug);


    return (
        <>
            {item.map((item , index) => (
                <div key={index}>

                    <h1 style={{ fontSize: '50px',  marginTop: '-80px', textAlign: 'center' }}>{item.title}</h1>
                    
                    <ImageSlideShow slug={item.slug} fill style={{width: 'auto' , height: 'auto'}}/>

                    <p style={{ margin: '10px', marginTop: '10px', fontFamily: 'cursive', fontSize: '20px', textAlign: 'center' }}>{item.role_contributions}</p>
                    
                    <h1 style={{ textAlign: 'left', fontSize: '20px', marginTop: '20px', textDecorationLine: 'underline' }}>Description</h1>

                    <p style={{margin: '15px' , textAlign: 'justify' , marginTop: '5px' }}>{item.description}</p>
                    <br></br>
                    
                    <br></br>

                    <h1 style={{ textAlign: 'left', fontSize: '20px', textDecorationLine: 'underline' , marginTop: '-20px' }}>Technologies</h1>

                    
                    {item.technology.map((tech, index) => (
                        <ul key={index} style={{ marginTop: '-15px'}}>
                            <li  style={{ margin: '25px' , textAlign: 'left' , marginLeft:'30px' , listStyle:'outside' }} >{tech}</li>
                        </ul>
                    ))}
                    

                    <h1 style={{ textAlign: 'left', fontSize: '20px', textDecorationLine: 'underline' , marginTop: '40px'}}>Links</h1>
                    
                    <div style={{ margin: '15px' , listStyle:'outside' , marginTop: '5px', }} >
                        { item.demo ? 
                            <>
                                <a 
                                    href={item.demo}
                                    aria-label={item.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo: Click here to preview live Site
                                </a>
                                <br></br>
                            </> 
                            : 
                            null
                        }
                        
                        { item.link ? 
                            <>
                                <p>
                                    Tutorial:{}
                                </p> 
                                <br></br>
                            </> 
                            : 
                            null
                        }
                        
                        { item.github ? <a
                            href={item.github}
                            aria-label={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >github: Click here to view app's github Repository</a> : null}
                    </div>

                    
                    <br></br>
                </div>
            ))}
        </>
    );
}
