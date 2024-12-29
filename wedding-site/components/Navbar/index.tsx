import React, { useEffect, useState } from 'react'
import { MenuIcon } from "../../assets/MenuIcon"
import { navBarBefore, navBarAfter, navBarContent, navBarItem, menuDrawerOpen, menuDrawerClosed, navDrawerItem, iconHolder, currentNavBarItem, currentNavDrawerItem } from "./index.css"
import useScreenSize from '../../hooks/useScreenSize';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
    const pathname = usePathname()
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
                    <Link href="/" className={pathname === "/" ? currentNavBarItem : navBarItem}>Home</Link>
                    <Link href={"/schedule"} className={pathname === "/schedule" ? currentNavBarItem : navBarItem}>Schedule</Link>
                    <Link href="/travel" className={pathname === "/travel" ? currentNavBarItem : navBarItem}>Travel</Link>
                    <Link href="/registry" className={pathname === "/registry" ? currentNavBarItem : navBarItem}>Registry</Link>
                    <Link href="/gallery" className={pathname === "/gallery" ? currentNavBarItem : navBarItem}>Gallery</Link>
                    <Link href="/things-to-do" className={pathname === "/things-to-do" ? currentNavBarItem : navBarItem}>Things to Do</Link>
                    <Link href="/faqs" className={pathname === "/faqs" ? currentNavBarItem : navBarItem}>FAQs</Link>
                </div>
                 <div className={isMenuDrawerOpen ? menuDrawerOpen : menuDrawerClosed}>
                    <Link href="/" className={pathname === "/" ? currentNavDrawerItem : navDrawerItem}>Home</Link>
                     <Link href={"/schedule"} className={pathname === "/schedule" ? currentNavDrawerItem : navDrawerItem}>Schedule</Link>
                    <Link href="/travel" className={pathname === "/travel" ? currentNavDrawerItem : navDrawerItem}>Travel</Link>
                    <Link href="/registry" className={pathname === "/registry" ? currentNavDrawerItem : navDrawerItem}>Registry</Link>
                    <Link href="/gallery" className={pathname === "/gallery" ? currentNavDrawerItem : navDrawerItem}>Gallery</Link>
                    <Link href="/things-to-do" className={pathname === "/things-to-do" ? currentNavDrawerItem : navDrawerItem}>Things to Do</Link>
                    <Link href="/faqs" className={pathname === "/faqs" ? currentNavDrawerItem : navDrawerItem}>FAQs</Link>
                </div>
                <div className={iconHolder} onClick={() => setIsMenuDrawerOpen((prev) => !prev)}>
                    <MenuIcon/> 
                </div>
              
            </div>
    )
}