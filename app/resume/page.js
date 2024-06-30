import Image from 'next/image'
import resume1 from '@/public/images/Front-End-Developer-Resume.jpg'
import resume2 from '@/public/images/Screenshot Resume 2.jpeg'
import resume3 from '@/public/images/Screenshot Resume 3.jpeg'


export const metadata = {
    title: "My Resume - Isafa A Marshall",
    description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
};

export default function ResumePage () {


    return (
        <>
            <h1 style={{ textAlign:'center' , fontSize:'30px' , fontWeight:'bold', marginTop:'-70px'}}>
                My Resume
            </h1>

            <Image
                src={resume1}
                
                priority
            />

            {/* <p>Download Now</p> */}

            {/* <p>it and highlight your strenghts</p> */}
            
        </>
    )
}