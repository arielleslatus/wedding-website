/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');


const withVanillaExtract = createVanillaExtractPlugin();


const nextConfig: NextConfig = {
      webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
                publicPath: '/assets/',
            },
        });
        
        return config;
    },
};

module.exports = withVanillaExtract(nextConfig);
