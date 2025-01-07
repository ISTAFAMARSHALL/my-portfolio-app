'use client'
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 bg-gray-800 text-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <p className="text-2xl font-bold">Istafa A Marshall</p>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-4">
//             <Link href="/about">
//               <p className="hover:text-gray-300">About</p>
//             </Link>
//             <Link href="/projects">
//               <p className="hover:text-gray-300">Projects</p>
//             </Link>
//             <Link href="/resume">
//               <p className="hover:text-gray-300">Resume</p>
//             </Link>
//             <Link href="/contact">
//               <p className="hover:text-gray-300">Contact</p>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle navigation menu"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav
//           className="bg-gray-700 md:hidden"
//           aria-label="Mobile Navigation Menu"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link href="/about">
//               <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
//                 About
//               </p>
//             </Link>
//             <Link href="/projects">
//               <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
//                 Projects
//               </p>
//             </Link>
//             <Link href="/resume">
//               <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
//                 Resume
//               </p>
//             </Link>
//             <Link href="/contact">
//               <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">
//                 Contact
//               </p>
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function MainHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   // Define your navigation links
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Me" },
//     { href: "/projects", label: "Projects" },
//     { href: "/resume", label: "Resume" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         {/* Branding Section */}
//         <div className="flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <a className="text-2xl font-extrabold">Code By Istafa</a>
//             </Link>
//           </div>
//           <span className="hidden md:inline text-sm italic text-gray-400">
//             Creating meaningful apps through innovation
//           </span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-4">
//           {navLinks.map((link) => (
//             <Link href={link.href} key={link.href}>
//               <a
//                 className={`hover:text-gray-300 ${
//                   router.pathname === link.href
//                     ? "border-b-2 border-teal-400"
//                     : ""
//                 }`}
//               >
//                 {link.label}
//               </a>
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden focus:outline-none"
//           aria-label="Toggle navigation menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav
//           className="bg-gray-800 text-white md:hidden"
//           aria-label="Mobile Navigation"
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link href={link.href} key={link.href}>
//                 <a
//                   className={`block px-3 py-2 rounded-md text-base font-medium ${
//                     router.pathname === link.href
//                       ? "bg-teal-400 text-gray-900"
//                       : "hover:bg-gray-700"
//                   }`}
//                 >
//                   {link.label}
//                 </a>
//               </Link>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MainHeader() {
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set the current path when the component mounts
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Branding Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-2xl font-extrabold">Code By Istafa</p>
          </Link>
          <span className="hidden md:inline text-sm italic text-gray-400">
            Creating meaningful apps through innovation
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <p
                className={`hover:text-gray-300 ${
                  currentPath === link.href
                    ? "border-b-2 border-teal-400"
                    : ""
                }`}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-gray-800 text-white md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <p
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    currentPath === link.href
                      ? "bg-teal-400 text-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}