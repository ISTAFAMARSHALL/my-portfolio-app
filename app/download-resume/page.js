// pages/api/download-resume.js
// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req, res) {
//     const filePath = path.resolve('.', 'public/Front-End-Developer-Resume.pdf');
//     const fileContents = await fs.readFile(filePath);

//     console.log(fileContents)



//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
//     res.send(fileContents);
// }
