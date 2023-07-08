'use client';

import Link from 'next/link';

export default function HomePage({ children }: any) {
    return (
        <div className="flex h-[1500px]">
            <Link href="/products">from dashboard to product</Link>
            {children}
        </div>
    );
}
