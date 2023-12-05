"use client";

import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerButton from "@/partials/HamburgerButton";
import React, { useEffect, useState } from "react";


//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  enable?: boolean;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;

  // remive enable = false items
  const mainFiltered = main.filter(
    (objeto) => objeto.enable === true || objeto.enable == null,
  );
  const { settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const {
    logo_light,
    logo_dark,
    logo_text,
  }: {
    logo_light: string;
    logo_dark: string;
    logo_text: string;
  } = config.site;

  return (
    <header className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}>
      <nav className={`navbar container align-middle flex items-center justify-between}`}>

        {/* navbar toggler */}
        <div id="header_height" className={`flex w-full py-6 lg:w-auto lg:block items-center justify-between`}>
          <Logo
            srcDark={logo_dark}
            srcLight={logo_light}
            logoHeight={45}
            logoWidth={320}
            title={logo_text}
          />
          <div className={`flex items-center justify-center lg:hidden`}>
            <HamburgerButton onClick={handleHamburgerClick} />
          </div>
        </div>

        {/* navbar toggler */}
        <ul
          className={`navbar-nav order-3 w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 ${isMenuOpen ? "block" : "hidden"}`}
        >
          {mainFiltered.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex items-center ${menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                      ? "active"
                      : ""
                      }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={`nav-dropdown-link block ${(pathname === `${child.url}/` ||
                            pathname === child.url) &&
                            "active"
                            }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={`nav-link block ${(pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                      }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="order-1 ml-auto flex items-center justify-center md:order-2 lg:ml-0">
          <Link
            className="btn btn-outline-primary btn-sm lg:inline-block hidden"
            href="/contact"
          >
            Contactez-nous
          </Link>
          <ThemeSwitcher className="mr-5" />
        </div>

      </nav>
    </header>
  );
};

export default Header;
