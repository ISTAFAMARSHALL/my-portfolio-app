import Image from 'next/image'
import resume1 from '@/public/resumes/Front-End-Developer-Resume.jpg';
import resume2 from '@/public/resumes/New_Resume_Sept 2024.png';



export const metadata = {
    title: "My Resume - Isafa A Marshall",
    description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
};

export default function ResumePage() {

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginTop: '-70px' , marginBottom: '-20px' }}>
                My Resume
            </h1>

            <Image
                src={resume2}
                priority
            />;
            
        </>
    );
}
