// // app/api/download-resume/route.js
// import path from 'path';
// import { promises as fs } from 'fs';
// import { NextResponse } from 'next/server';


// export async function GET() {
//     const filePath = path.resolve('.', 'public/Front-End-Developer-Resume.pdf');
      
//     const fileContents = await fs.readFile(filePath);
    
//     const response = new NextResponse(fileContents, {
//         headers: {
//             "Content-Description": "File-Transfer",
//             "Content-Transfer-Encoding": "binary",
//             'Content-Type': 'application/pdf',
//             'Content-Disposition': 'attachment; filename=Istata_Marshall_Resume.pdf',
//         },
//     });

//     return response;
// }


// app/api/download-resume/route.js
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const filePath = path.resolve('public', 'Front-End-Developer-Resume.pdf');
    const fileContents = await fs.readFile(filePath, 'base64'); // Read the file as base64

    const response = new NextResponse(fileContents, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Istata_Marshall_Resume.pdf"',
            'Content-Transfer-Encoding': 'base64',
        },
    });

    return response;
}
