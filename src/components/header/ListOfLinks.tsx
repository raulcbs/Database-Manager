import Link from 'next/link'
import { usePathname } from 'next/navigation'

const INITIAL_LINKS = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/user',
    name: 'User',
  },
  {
    href: '/post',
    name: 'Post',
  },
]

export function ListOfLinks() {
  const pathname = usePathname()

  // Función para determinar si la ruta actual coincide con la URL del enlace
  const isActiveLink = (href: string) => {
    return pathname === href
  }

  return (
    <div className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
      {INITIAL_LINKS.map(({ href, name }, index) => (
        <Link
          key={index}
          href={href}
          className={`block py-2 pl-3 pr-4 transition-colors duration-300 ${
            isActiveLink(href) ? 'text-blue-700' : 'text-gray-900'
          } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
            isActiveLink(pathname) ? 'dark:text-blue-500' : 'dark:text-white'
          } md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }`}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
