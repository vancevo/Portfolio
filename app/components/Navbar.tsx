"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [pathName, setPathName] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const SECTION_POSITION = {
    home: 0,
    about: 800,
    experience: 2050,
    contact: 2849,
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > SECTION_POSITION.home) {
      setPathName("#home");
    }
    if (scrollPosition > SECTION_POSITION.about) {
      setPathName("#about");
    }
    if (scrollPosition > SECTION_POSITION.experience) {
      setPathName("#experience");
    }
    if (scrollPosition > SECTION_POSITION.contact) {
      setPathName("#contact");
    }
  }, [scrollPosition]);
  const router = useRouter();
  const routes = [
    {
      id: "#home",
      href: "#home",
      label: "Home",
      icon: "bi bi-house navicon",
      active: pathName.includes("#home") ? "active" : "",
    },
    {
      id: "#about",
      href: "#about",
      label: "About",
      icon: "bi bi-person navicon",
      active: pathName.includes("#about") ? "active" : "",
    },
    {
      id: "#experience",
      href: "#experience",
      label: "Professional Experience",
      icon: "bi bi-file-earmark-text navicon",
      active: pathName.includes("#experience") ? "active" : "",
    },
    {
      id: "#contact",
      href: "#contact",
      label: "Contact",
      icon: "bi bi-envelope navicon",
      active: pathName.includes("#contact") ? "active" : "",
    },
  ];
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link
              href={route.href}
              className={route.active}
              onClick={() => {
                setPathName(`${route.href}`);
                router.push(`/${route.href}`);
              }}
            >
              <i className={route.icon}></i>
              <span>{route.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
