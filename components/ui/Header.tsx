import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 bg-dark-lighter border-b border-dark z-50 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-lg font-semibold text-primary-blue">
                    <Image className="rounded-full" src="/Logo3.png" width={50} height={50} alt="logo" />
                </div>

                <div className="flex-1 max-w-2xl mx-6 relative">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search tile textures..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-dark border border-dark text-white text-sm rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
                        />
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-6">
                    <Link
                        href="/"
                        className={`text-sm font-medium ${pathname === "/" ? "text-primary-blue" : "text-gray-lighter hover:text-primary-blue"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/categories"
                        className={`text-sm ${pathname === "/categories" ? "text-primary-blue font-medium" : "text-gray-lighter hover:text-primary-blue"
                            }`}
                    >
                        Categories
                    </Link>
                    <Link
                        href="/featured"
                        className={`text-sm ${pathname === "/featured" ? "text-primary-blue font-medium" : "text-gray-lighter hover:text-primary-blue"
                            }`}
                    >
                        Featured
                    </Link>

                    <Link
                        href="/about"
                        className={`text-sm ${pathname === "/about" ? "text-primary-blue font-medium" : "text-gray-lighter hover:text-primary-blue"
                            }`}
                    >
                        About
                    </Link>
                    <Link href="/contact" className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors">
                        Contact Us
                    </Link>
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-white"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pb-4 border-t border-dark">
                    <nav className="flex flex-col gap-4 mt-4">
                        <Link href="/" className="text-primary-blue text-sm font-medium">
                            Home
                        </Link>
                        <Link
                            href="/categories"
                            className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
                        >
                            Categories
                        </Link>
                        <Link
                            href="/featured"
                            className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
                        >
                            Featured
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
                        >
                            About
                        </Link>
                        <Link href="/contact" className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors">
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>

    )
}