// import Image from 'next/image'
// import resume1 from '@/public/images/Front-End-Developer-Resume.jpg'
// import resume2 from '@/public/images/Screenshot Resume 2.jpeg'
// import resume3 from '@/public/images/Screenshot Resume 3.jpeg'


// export const metadata = {
//     title: "My Resume - Isafa A Marshall",
//     description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
// };

// export default function ResumePage () {


//     return (
//         <>
//             <h1 style={{ textAlign:'center' , fontSize:'30px' , fontWeight:'bold', marginTop:'-70px'}}>
//                 My Resume
//             </h1>

//             <Image
//                 src={resume1}
                
//                 priority
//             />

//             {/* <p>Download Now</p> */}

//             {/* <p>it and highlight your strenghts</p> */}
            
//         </>
//     )
// }

import Image from 'next/image';
import DownloadButton from '@/components/download-button'
import resume1 from '@/public/images/Front-End-Developer-Resume.jpg';

export const metadata = {
    title: "My Resume - Isafa A Marshall",
    description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
};

export default async function ResumePage() {

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginTop: '-70px' }}>
                My Resume
            </h1>

            <Image
                src={resume1}
                priority
            />

            <DownloadButton />

            {/* <a
                href="/public/images/Front-End-Developer-Resume.pdf"
                alt="alt text"
                target="_blank"
                download
                locale={false}
            >Download FIle</a> */}

            {/* <button 
                onClick={handleDownload} 
                style={{
                    display: 'block', 
                    margin: '20px auto', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer'
                }}
            >
                Download Resume (PDF)
            </button> */}
        </>
    );
}
