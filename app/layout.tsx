import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'; // inter ফন্ট ইমপোর্ট

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        {/*<body>{children}</body>*/}

        </html>
    );
}
