'use client'

export default function DownloadButton () {

    const handleDownload = () => {
        window.location.href = '/download-resume';
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
            >
                Download Resume (PDF)
            </button>
    )
}