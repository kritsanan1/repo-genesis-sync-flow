
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
        วส
      </div>
      <span className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
        วังสามหมอ
      </span>
    </Link>
  );
};

export default Logo;
