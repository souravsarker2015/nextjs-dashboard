// /app/ui/fonts.ts (সম্পূর্ণ)

import {Inter} from 'next/font/google';
import {Lusitana} from 'next/font/google'; // Lusitana ইমপোর্ট করা হলো

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({ // Lusitana কনফিগার করা হলো
    weight: ['400', '700'],
    subsets: ['latin'],
});