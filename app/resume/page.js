// // import Image from 'next/image'
// // import resume1 from '@/public/images/Front-End-Developer-Resume.jpg'
// // import resume2 from '@/public/images/Screenshot Resume 2.jpeg'
// // import resume3 from '@/public/images/Screenshot Resume 3.jpeg'


// // export const metadata = {
// //     title: "My Resume - Isafa A Marshall",
// //     description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
// // };

// // export default function ResumePage () {


// //     return (
// //         <>
// //             <h1 style={{ textAlign:'center' , fontSize:'30px' , fontWeight:'bold', marginTop:'-70px'}}>
// //                 My Resume
// //             </h1>

// //             <Image
// //                 src={resume1}
                
// //                 priority
// //             />

// //             {/* <p>Download Now</p> */}

// //             {/* <p>it and highlight your strenghts</p> */}
            
// //         </>
// //     )
// // }

// import Image from 'next/image';
// import Link from 'next/link'
// import DownloadButton from '@/components/download-button'
// import resume1 from '@/public/images/Front-End-Developer-Resume.jpg';

// export const metadata = {
//     title: "My Resume - Isafa A Marshall",
//     description: "Front-End Developer (React, Next.js) from NYC 🇺🇸",
// };

// export default async function ResumePage() {

//     return (
//         <>
//             <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginTop: '-70px' }}>
//                 My Resume
//             </h1>

//             <Image
//                 src={resume1}
//                 priority
//             />
            

//             <DownloadButton />

//             <a href="/Front-End-Developer-Resume.pdf" download>Download</a>

//             <br></br>
//             <br></br>
                
//             <a href={`/Front-End-Developer-Resume.pdf`} target="_blank" rel="noopener noreferrer" ><button>Download CV</button></a>


//             <Link
//                 href={`/Front-End-Developer-Resume.pdf`}
//                 className="cursor-pointer  block rounded py-4 px-4 bg-blue text-white border-0"
//                   style={{
//                     width: "100%",
//                     maxWidth: 200,
//                     minWidth: 100,
//                     fontSize: "1rem",
//                   }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   download
//               >
                
                  
//                   <span className="ml-4 ">Download Invoice</span>
                
//               </Link>

//             {/* <a
//                 href="/public/images/Front-End-Developer-Resume.pdf"
//                 alt="alt text"
//                 target="_blank"
//                 download
//                 locale={false}
//             >Download FIle</a> */}

//             {/* <button 
//                 onClick={handleDownload} 
//                 style={{
//                     display: 'block', 
//                     margin: '20px auto', 
//                     padding: '10px 20px', 
//                     fontSize: '16px', 
//                     fontWeight: 'bold', 
//                     cursor: 'pointer'
//                 }}
//             >
//                 Download Resume (PDF)
//             </button> */}
//         </>
//     );
// }

import Image from 'next/image';
import resume1 from '@/public/images/Front-End-Developer-Resume.jpg';
import DownloadButton from '@/components/download-button'
import resume2 from '@/public/images/Screenshot Resume 2.jpeg';
import resume3 from '@/public/images/Screenshot Resume 3.jpeg';


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
                src={resume1}
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
