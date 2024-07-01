'use client'
import { useState } from 'react';

export default function DownloadButton () {

    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        const response = await fetch('/download-resume');
        const base64 = await response.text();

        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${base64}`;
        link.download = 'Istata_Marshall_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setLoading(false);
    };

    return (
        <button 
                onClick={handleDownload} 
                style={{
                    display: 'block', 
                    margin: '20px auto', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer'
                }}
                disabled={loading}
            >
                {loading ? 'Downloading...' : 'Download Resume (PDF)'}
            </button>
    )
}