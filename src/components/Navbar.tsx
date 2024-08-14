// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faBriefcase, faTools, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = (path: string) =>
    `flex items-center text-lg ${
      router.pathname === path ? 'text-teal-300 border-b-2 border-teal-300' : 'dark:text-white text-gray-800 hover:text-teal-300'
    } transition-colors duration-300`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="text-3xl font-bold tracking-wide dark:text-white text-gray-800" href="/">
              MyPortfolio
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link className={linkClass('/')} href="/">
                <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>
            <Link className={linkClass('/about')} href="/about">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> About
            </Link>
            <Link className={linkClass('/skills')} href="/skills">
                <FontAwesomeIcon icon={faTools} className="mr-2" /> Skills
            </Link>
            <Link className={linkClass('/experiences')} href="/experiences">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Experience
            </Link>
            <Link className={linkClass('/contact')} href="/contact">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="text-xl dark:text-white text-gray-800 hover:text-gray-400 transition">
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl dark:text-white text-gray-800 hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xl dark:text-white text-gray-800 hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-transparent'} backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={toggleMenu} className={linkClass('/')}>
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className={linkClass('/about')}>
              <FontAwesomeIcon icon={faUser} className="mr-2" /> About
            </Link>
            <Link href="/skills" onClick={toggleMenu} className={linkClass('/skills')}>
              <FontAwesomeIcon icon={faTools} className="mr-2" /> Skills
            </Link>
            <Link href="/experiences" onClick={toggleMenu} className={linkClass('/experiences')}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Experience
            </Link>
            <Link href="/contact" onClick={toggleMenu} className={linkClass('/contact')}>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
