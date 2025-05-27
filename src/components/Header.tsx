"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          VIKASH.
        </Link>

        <div className="sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground hover:text-accent transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <nav
          className={`${
            mobileOpen ? "block" : "hidden"
          } absolute sm:static top-full left-0 w-full sm:w-auto sm:flex sm:items-center sm:space-x-6 bg-background sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ease-in-out`}
        >
          <Link
            href="#works"
            className="block py-2 sm:py-0 text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Works
          </Link>
          <Link
            href="#about"
            className="block py-2 sm:py-0 text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block py-2 sm:py-0 text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
