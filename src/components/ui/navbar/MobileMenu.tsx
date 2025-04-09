
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  links: { text: string; href: string }[];
  user?: { name: string; avatar: string };
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  user,
  onLogin,
  onSignup,
  onLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="เมนู"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="py-2 px-4 hover:bg-orange-100 dark:hover:bg-blue-900 rounded-md text-gray-700 dark:text-gray-200"
                    onClick={toggleMenu}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>

              <div className="border-t pt-4 flex flex-col gap-2">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 p-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        onLogout();
                        toggleMenu();
                      }}
                    >
                      ออกจากระบบ
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      onClick={() => {
                        onLogin();
                        toggleMenu();
                      }}
                    >
                      เข้าสู่ระบบ
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-950"
                      onClick={() => {
                        onSignup();
                        toggleMenu();
                      }}
                    >
                      สมัครสมาชิก
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
