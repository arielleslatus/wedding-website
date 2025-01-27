import React from 'react';
import { HomeTemplate } from '../../templates/HomeTemplate';

export const imageBlobUrlBase: string =
    'https://xodb1waco49iw3dy.public.blob.vercel-storage.com/images';

export default function Home() {
    return <HomeTemplate />;
}
