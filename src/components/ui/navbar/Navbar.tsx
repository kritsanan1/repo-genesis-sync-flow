
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  links: { text: string; href: string }[];
  user?: { name: string; avatar: string };
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  links,
  user,
  onLogin = () => console.log("เข้าสู่ระบบ"),
  onSignup = () => console.log("สมัครสมาชิก"),
  onLogout = () => console.log("ออกจากระบบ"),
}) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Logo />

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-9 w-9 rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">โปรไฟล์</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">ตั้งค่า</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-500">
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={onLogin}
                  className="text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-blue-900"
                >
                  เข้าสู่ระบบ
                </Button>
                <Button
                  variant="default"
                  onClick={onSignup}
                  className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
                >
                  สมัครสมาชิก
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            links={links}
            user={user}
            onLogin={onLogin}
            onSignup={onSignup}
            onLogout={onLogout}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
