
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname()
  return (
    <nav className="bg-white px-5 py-3 mb-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold text-blue-500 hover:text-blue-700 ${pathname === '/' ? 'active bg-red-500 p-2 rounded-lg text-white' : ''}`}>
          Gallery
        </Link>
        {/* Links */}
        <ul className="flex space-x-4">
            <li>
                <Link href="/" className={`text-gray-700 active:text-blue-500 text-2xl font-light hover:text-blue-500 ${pathname === '/' ? 'active text-red-400' : ''}`}>Home</Link>
            </li>
            <li>
                <Link href="/photo" className={`text-gray-700 active:text-blue-500 text-2xl font-light hover:text-blue-500 ${pathname === '/photo' ? 'active text-red-500' : ''}`}>Photo</Link>
            </li>
            <li>
                <Link href="/about" className={`text-gray-700 active:text-blue-500 text-2xl font-light hover:text-blue-500 ${pathname === '/about' ? 'active text-red-500' : ''}`}>About</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar;