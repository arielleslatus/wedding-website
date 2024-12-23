'use client'
import React, { useEffect, useState } from "react";
import { container, iconHolder, menuDrawerClosed, menuDrawerOpen, navBarAfter, navBarBefore, navBarContent, navBarItem, navDrawerItem } from "./index.css"
import { MenuIcon } from "../../MenuIcon";
import useScreenSize from "../../hooks/useScreenSize";

export const Page: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);
    const {width} = useScreenSize()

    useEffect(() => {
        if (width > 1000) {
            setIsMenuDrawerOpen(false)
        }
    }, [width])


    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY === prevScrollY || currentScrollY < prevScrollY || isMenuDrawerOpen) {
            setShowNav(true)
        } else if (!isMenuDrawerOpen) {
            setShowNav(false)
        }
        setPrevScrollY(currentScrollY)
    }
        document.addEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return (
        <div className={container}>
            <div className={showNav ? navBarBefore : navBarAfter}>
                <div className={navBarContent}>
                <p className={navBarItem}>Home</p>
                    <p className={navBarItem}>Schedule</p>
                    <p className={navBarItem}>Travel</p>
                    <p className={navBarItem}>Registry</p>
                    <p className={navBarItem}>Wedding Party</p>
                    <p className={navBarItem}>Gallery</p>
                    <p className={navBarItem}>Things to Do</p>
                    <p className={navBarItem}>FAQs</p>
                </div>
                 <div className={isMenuDrawerOpen ? menuDrawerOpen : menuDrawerClosed}>
                        <p className={navDrawerItem}>Schedule</p>
                    <p className={navDrawerItem}>Travel</p>
                    <p className={navDrawerItem}>Registry</p>
                    <p className={navDrawerItem}>Wedding Party</p>
                    <p className={navDrawerItem}>Gallery</p>
                    <p className={navDrawerItem}>Things to Do</p>
                    <p className={navDrawerItem}>FAQs</p>
                </div>
                <div className={iconHolder} onClick={() => setIsMenuDrawerOpen((prev) => !prev)}>
                    <MenuIcon/> 
                </div>
              
            </div>
        </div>
    )
}