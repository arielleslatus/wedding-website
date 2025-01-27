import React, { useEffect, useState } from 'react';
import { MenuIcon } from '../../assets/MenuIcon';
import {
    navBarBefore,
    navBarAfter,
    navBarContent,
    navBarItem,
    menuDrawerOpen,
    menuDrawerClosed,
    navDrawerItem,
    iconHolder,
    currentNavBarItem,
    currentNavDrawerItem,
    flowerImageStyle,
    linksHolder,
    registryIconHolder,
} from './index.css';
import useScreenSize from '../../hooks/useScreenSize';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from '../Icons/ExternalLink';
import { imageBlobUrlBase } from '../../../utils/linkUtils';

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [showNav, setShowNav] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);
    const { width } = useScreenSize();

    useEffect(() => {
        if (width > 1000) {
            setIsMenuDrawerOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (
                currentScrollY === prevScrollY ||
                currentScrollY < prevScrollY ||
                isMenuDrawerOpen
            ) {
                setShowNav(true);
            } else if (!isMenuDrawerOpen) {
                setShowNav(false);
            }
            setPrevScrollY(currentScrollY);
        };
        document.addEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return (
        <div className={showNav ? navBarBefore : navBarAfter}>
            <div className={navBarContent}>
                <Link
                    href="/"
                    className={
                        pathname === '/' ? currentNavBarItem : navBarItem
                    }
                >
                    Home
                </Link>
                <Link
                    href={'/schedule'}
                    className={
                        pathname === '/schedule'
                            ? currentNavBarItem
                            : navBarItem
                    }
                >
                    Schedule
                </Link>
                <Link
                    href="/travel"
                    className={
                        pathname === '/travel' ? currentNavBarItem : navBarItem
                    }
                >
                    Travel
                </Link>
                <Link
                    href="/gallery"
                    className={
                        pathname === '/gallery' ? currentNavBarItem : navBarItem
                    }
                >
                    Gallery
                </Link>
                <Link
                    href="/things-to-do"
                    className={
                        pathname === '/things-to-do'
                            ? currentNavBarItem
                            : navBarItem
                    }
                >
                    Things to Do in NYC
                </Link>
                <Link
                    href="/faqs"
                    className={
                        pathname === '/faqs' ? currentNavBarItem : navBarItem
                    }
                >
                    FAQs
                </Link>
                <a
                    href="https://www.zola.com/registry/arielleandnicolas"
                    className={navBarItem}
                    target="_blank"
                    rel="noreferrer"
                >
                    Registry
                    <div className={registryIconHolder}>
                        <ExternalLink color="#FFFFFF" />
                    </div>
                </a>
            </div>
            <div
                id="navDrawer"
                className={isMenuDrawerOpen ? menuDrawerOpen : menuDrawerClosed}
            >
                <div className={linksHolder}>
                    <Link
                        href="/"
                        className={
                            pathname === '/'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href={'/schedule'}
                        className={
                            pathname === '/schedule'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        Schedule
                    </Link>
                    <Link
                        href="/travel"
                        className={
                            pathname === '/travel'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        Travel
                    </Link>
                    <Link
                        href="/gallery"
                        className={
                            pathname === '/gallery'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/things-to-do"
                        className={
                            pathname === '/things-to-do'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        Things to Do in NYC
                    </Link>
                    <Link
                        href="/faqs"
                        className={
                            pathname === '/faqs'
                                ? currentNavDrawerItem
                                : navDrawerItem
                        }
                    >
                        FAQs
                    </Link>
                    <a
                        href="https://www.zola.com/registry/arielleandnicolas"
                        className={navDrawerItem}
                    >
                        Registry
                        <div className={registryIconHolder}>
                            <ExternalLink color="#000000" />
                        </div>
                    </a>
                </div>
                <img
                    src={`${imageBlobUrlBase}/tigerlily.png`}
                    className={flowerImageStyle}
                />
            </div>
            <div
                className={iconHolder}
                onClick={() => setIsMenuDrawerOpen((prev) => !prev)}
            >
                <MenuIcon />
            </div>
        </div>
    );
};
