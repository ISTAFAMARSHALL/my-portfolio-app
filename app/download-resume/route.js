// app/api/download-resume/route.js
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function GET() {
    const filePath = path.resolve('.', 'public/Front-End-Developer-Resume.pdf');
      
    const fileContents = await fs.readFile(filePath);
    
    const response = new NextResponse(fileContents, {
        headers: {
            "Content-Description": "File-Transfer",
            "Content-Transfer-Encoding": "binary",
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=Istata_Marshall_Resume.pdf',
        },
    });

    return response;
}

// // app/api/download-resume/route.js
// import path from 'path';
// import { promises as fs } from 'fs';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     const filePath = path.resolve('public', 'Front-End-Developer-Resume.pdf');
//     const fileContents = await fs.readFile(filePath);

//     return new NextResponse(fileContents, {
//         headers: {
//             'Content-Type': 'application/pdf',
//             'Content-Disposition': 'attachment; filename="resume.pdf"',
//         },
//     });
// }

// // app/api/download-resume/route.js
// import path from 'path';
// import { promises as fs } from 'fs';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     const filePath = path.resolve('public', 'Front-End-Developer-Resume.pdf');
//         console.log(filePath)    
        
//     const fileContents = await fs.readFile(filePath);
//         console.log(fileContents)
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/pdf');
//     headers.append('Content-Disposition', 'attachment; filename="resume.pdf"');

//     console.log(NextResponse)

//     return new NextResponse(fileContents, {
//         headers,
//     });
    
// }
