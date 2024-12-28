import React, { useEffect, useState } from 'react'
import { MenuIcon } from "../../assets/MenuIcon"
import { navBarBefore, navBarAfter, navBarContent, navBarItem, menuDrawerOpen, menuDrawerClosed, navDrawerItem, iconHolder } from "./index.css"
import useScreenSize from '../../hooks/useScreenSize';
import Link from 'next/link';

export const Navbar: React.FC = () => {

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
            <div className={showNav ? navBarBefore : navBarAfter}>
                <div className={navBarContent}>
                    <Link href="/" className={navBarItem}>Home</Link>
                    <Link href={"/schedule"} className={navBarItem}>Schedule</Link>
                    <Link href="/travel" className={navBarItem}>Travel</Link>
                    <Link href="/registry" className={navBarItem}>Registry</Link>
                    <Link href="/gallery" className={navBarItem}>Gallery</Link>
                    <Link href="/things-to-do" className={navBarItem}>Things to Do</Link>
                    <Link href="/faqs" className={navBarItem}>FAQs</Link>
                </div>
                 <div className={isMenuDrawerOpen ? menuDrawerOpen : menuDrawerClosed}>
                    <Link href="/" className={navDrawerItem}>Home</Link>
                     <Link href={"/schedule"} className={navDrawerItem}>Schedule</Link>
                    <Link href="/travel" className={navDrawerItem}>Travel</Link>
                    <Link href="/registry" className={navDrawerItem}>Registry</Link>
                    <Link href="/gallery" className={navDrawerItem}>Gallery</Link>
                    <Link href="/things-to-do" className={navDrawerItem}>Things to Do</Link>
                    <Link href="/faqs" className={navDrawerItem}>FAQs</Link>
                </div>
                <div className={iconHolder} onClick={() => setIsMenuDrawerOpen((prev) => !prev)}>
                    <MenuIcon/> 
                </div>
              
            </div>
    )
}