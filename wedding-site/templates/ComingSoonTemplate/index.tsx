import React from 'react'
import { Page } from "../Page"
import { comingSoon } from './index.css'


export const ComingSoonTemplate: React.FC = () => {
    return (
        <Page>
            <p className={comingSoon}>Coming soon...</p>
        </Page>
    )
}