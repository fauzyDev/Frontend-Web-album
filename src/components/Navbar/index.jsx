import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  return (
    <header className="border-gray-300 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold text-gray-200 whitespace-nowrap">
            Album
          </span>
        </a>

        {/* Dark Mode Toggle */}
        <label className="relative flex items-center cursor-pointer gap-2">
          {/* Sun Icon */}
          <svg
            className="text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          {/* Toggle Switch */}
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className={`toggle theme-controller ${
              isDarkMode ? "bg-blue-600" : "bg-yellow-600"
            }`}
          />

          {/* Moon Icon */}
          <svg
            className="text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#fff"
            size={24}
            aria-label="Toggle menu"
          />
        </div>

        {/* Menu Items for Desktop */}
        <div
          className={`w-full md:flex md:w-auto transition-[max-height] duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          } md:max-h-none md:overflow-visible overflow-hidden`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col md:flex-row items-center font-medium mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent">
            <li>
              <a
                href="#home"
                className="navbar-link block py-2 px-3 md:p-0 text-gray-300 dark:text-gray-400 font-semibold rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white md:hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#foto"
                className="navbar-link block py-2 px-3 md:p-0 text-gray-300 dark:text-gray-400 font-semibold rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white md:hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Foto
              </a>
            </li>
            <li>
              <a
                href="#video"
                className="navbar-link block py-2 px-3 md:p-0 text-gray-300 dark:text-gray-400 font-semibold rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white md:hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Video
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="navbar-link block py-2 px-3 md:p-0 text-gray-300 dark:text-gray-400 font-semibold rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white md:hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
