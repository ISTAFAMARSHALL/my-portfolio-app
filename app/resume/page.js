import Image from 'next/image'
import resume1 from '@/public/resumes/Front-End-Developer-Resume.jpg';
import DownloadButton from '@/components/download-button';
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
            />

            {/* <DownloadButton /> */}

            {/* <a 
                href="/Front-End-Developer-Resume.pdf" 
                download='/Front-End-Developer-Resume.pdf'
            >
                Download Here
                
            </a> */}

            {/* <Image src={resume1} alt='resume1' width="32" height="32" border="0"/> */}
            
        </>
    );
}
