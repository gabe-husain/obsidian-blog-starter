'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only open by default on home page
    setIsOpen(pathname === '/');
  }, [pathname]);

  return (
    <div className="flex min-h-screen">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition"
        aria-label="Toggle Sidebar"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen bg-black/5 dark:bg-white/5 transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
      >
        <div className={`p-8 pt-20 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <nav className="space-y-4">
            <Link
              href="/"
              className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              🏠 Home
            </Link>
            <Link
              href="/posts/about"
              className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              👤 About
            </Link>
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <h3 className="text-sm font-bold mb-2 text-black/70 dark:text-white/70">Navigation</h3>
              <Link
                href="/posts/Zettelkasten-Setup"
                className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                📝 Zettelkasten Setup
              </Link>
              <Link
                href="/posts/Fun-With-Notes"
                className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition mt-2"
              >
                🎮 Fun With Notes
              </Link>
            </div>
          </nav>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-4 md:p-8 lg:p-12">
          {/* Main content will be rendered here */}
        </div>
      </main>
    </div>
  );
}