import Script from 'next/script';
import React from 'react';

export const CustomAnalytics = () => {
    const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';

    const beforeSend = (event: string) => {
        console.log('add custom beforeSend logic here');
        return event;
    };

    const src = isDev
        ? 'https://www.slatus-lamori-wedding.com/_vercel/insights/script.js'
        : '/insights/script.js';

    if (typeof window !== 'undefined') {
        window.va?.('beforeSend', beforeSend);
    }

    return (
        <>
            <Script id="woof" strategy="afterInteractive">
                {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
            </Script>
            <Script
                src={src}
                data-endpoint="/insights"
                strategy="lazyOnload"
                async
            />
        </>
    );
};
