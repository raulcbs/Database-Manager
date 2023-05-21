'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';


const INITIAL_LINKS = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/user',
    name: 'User'
  },
  {
    href: '/profile',
    name: 'Profile'
  },
  {
    href: '/post',
    name: 'Post'
  },
  {
    href: '/drag-drop',
    name: 'Drag & Drop'
  },
]


export function Header() {
  const pathname = usePathname()

  // Función para determinar si la ruta actual coincide con la URL del enlace
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="border-gray-200 bg-gray-900 shadow">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white transition-colors duration-300">
            Raulcbs
          </span>
        </Link>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            {
              INITIAL_LINKS.map(({ href, name }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 transition-colors duration-300 ${isActiveLink(href) ? "text-blue-500" : "text-white"
                    }`}
                >
                  {name}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
