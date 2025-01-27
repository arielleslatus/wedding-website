import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { CustomAnalytics } from '../../analytics/CustomAnalytics';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Arielle & Nicolas',
};

export const imageBlobUrlBase: string =
    'https://xodb1waco49iw3dy.public.blob.vercel-storage.com/images';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/favicon.ico" sizes="any" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
                <Analytics />
                <CustomAnalytics />
            </body>
        </html>
    );
}
