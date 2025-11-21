'use client';

import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
// import {usePathname, useSearchParams} from "next/navigation";
// import {useRouter} from "next/router";
import {useSearchParams, usePathname, useRouter} from 'next/navigation'; // useRouter ও usePathname ইমপোর্ট
import {useDebouncedCallback} from 'use-debounce'; // useDebouncedCallback ইমপোর্ট করা হলো


export default function Search({placeholder}: { placeholder: string }) {
    const searchParams = useSearchParams(); // হুক ব্যবহার

    const pathname = usePathname(); // বর্তমান পাথ
    const {replace} = useRouter(); // replace পদ্ধতি

    // function handleSearch(term: string) { // handleSearch ফাংশন
    //     const params = new URLSearchParams(searchParams); // URLSearchParams ইনস্ট্যান্স তৈরি
    //     if (term) {
    //         params.set('query', term); // term থাকলে 'query' সেট করুন
    //     } else {
    //         params.delete('query'); // না থাকলে 'query' ডিলিট করুন
    //     }
    //     console.log(term);
    //     replace(`${pathname}?${params.toString()}`); // URL আপডেট
    // }

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 flex-shrink-0">

            {/*<label htmlFor="search" className="sr-only">*/}
            {/*    Search*/}
            {/*</label>*/}
            {/*<input*/}
            {/*    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"*/}
            {/*    placeholder={placeholder}*/}
            {/*/>*/}

            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value); // onChange লিসেনার
                }}
                defaultValue={searchParams.get('query')?.toString()} // defaultValue সেট করা হলো
            />
            {/*<MagnifyingGlassIcon*/}
            {/*    className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>*/}
        </div>
    );
}
