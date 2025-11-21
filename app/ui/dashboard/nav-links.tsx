// // /app/ui/dashboard/nav-links.tsx
// 'use client'; // এটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত
//
// import {
//     UserGroupIcon,
//     HomeIcon,
//     DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
// import Link from 'next/link'; // Link কম্পোনেন্ট ইমপোর্ট করা হলো
// import {usePathname} from 'next/navigation'; // usePathname হুক ইমপোর্ট করা হলো
// import clsx from 'clsx'; // clsx ইমপোর্ট করা হলো
//
// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
// const links = [
//     {
//         name: 'Home',
//         href: '/dashboard',
//         icon: HomeIcon
//     },
//     {
//         name: 'Invoices',
//         href: '/dashboard/invoices',
//         icon: DocumentDuplicateIcon,
//     },
//     {
//         name: 'Customers',
//         href: '/dashboard/customers',
//         icon: UserGroupIcon
//     },
// ];
//
// export default function NavLinks() {
//     const pathname = usePathname(); // বর্তমান পাথ পাওয়া হলো
//     return (
//         <>
//             {links.map((link) => {
//                 // const LinkIcon = link.icon;
//                 return (
//                     // <a> ট্যাগ-এর পরিবর্তে <Link> ব্যবহার করা হয়েছে
//                     <>
//                         {links.map((link) => {
//                             const LinkIcon = link.icon;
//                             return (
//                                 <Link
//                                     key={link.name}
//                                     href={link.href}
//                                     className={clsx(
//                                         'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//                                         {
//                                             'bg-sky-100 text-blue-600': pathname === link.href, // শর্তসাপেক্ষে অ্যাকটিভ ক্লাস যুক্ত করা হলো
//                                         },
//                                     )}
//                                 >
//                                     <LinkIcon className="w-6"/>
//                                     <p className="hidden md:block">{link.name}</p>
//                                 </Link>
//                             );
//                         })}
//                     </>
//                     // <Link
//                     //     key={link.name}
//                     //     href={link.href}
//                     //     className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//                     // >
//                     //     <LinkIcon className="w-6"/>
//                     //     <p className="hidden md:block">{link.name}</p>
//                     // </Link>
//                     // <a
//                     //     key={link.name}
//                     //     href={link.href}
//                     //     className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//                     // >
//                     //     <LinkIcon className="w-6"/>
//                     //     <p className="hidden md:block">{link.name}</p>
//                     // </a>
//                 );
//             })}
//         </>
//     );
// }

// /app/ui/dashboard/nav-links.tsx

'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // clsx ইমপোর্ট করা হলো

// ... links অ্যারে
const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: UserGroupIcon
    },
];
export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href, // শর্তসাপেক্ষে অ্যাকটিভ ক্লাস যুক্ত করা হলো
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}