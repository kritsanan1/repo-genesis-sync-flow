
import React from "react";
import Navbar from "@/components/ui/navbar/Navbar";

const Index = () => {
  // Example navigation links
  const navLinks = [
    { text: "หน้าหลัก", href: "/" },
    { text: "เรียนรู้", href: "/learn" },
    { text: "บทความ", href: "/articles" },
    { text: "เกี่ยวกับเรา", href: "/about" },
    { text: "ติดต่อเรา", href: "/contact" },
  ];

  // Example user (uncomment to test logged in state)
  // const user = {
  //   name: "คุณวังสามหมอ",
  //   avatar: "https://github.com/shadcn.png",
  // };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar links={navLinks} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ยินดีต้อนรับสู่{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              วังสามหมอ
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            เว็บไซต์เรียนรู้ที่มีความสวยงามและเป็นเอกลักษณ์
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">รูปภาพบทความ {i}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  หัวข้อบทความที่ {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  เนื้อหาตัวอย่างสั้นๆ สำหรับบทความที่ {i} ซึ่งจะแสดงเพื่อให้ผู้ใช้เห็นภาพรวมของบทความ
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-md hover:from-orange-600 hover:to-blue-600 transition-all">
                  อ่านเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} วังสามหมอ. สงวนลิขสิทธิ์ทั้งหมด.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
