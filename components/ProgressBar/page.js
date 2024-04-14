'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      setScrollProgress(0);
    } else if (windowScrollTop > totalHeight) {
      setScrollProgress(100);
    } else {
      setScrollProgress((windowScrollTop / totalHeight) * 100);
    }
    // console.log(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="fixed  w-full h-52   rounded-lg">
        <div style={{ width: `${scrollProgress}%` }} className={`border-green-700 bg-green-400 ml-5 mr-5  h-8 rounded-lg `}></div>
      </div>
      <div className="border-gray bg-gray-300 w-full mt-8 h-[4000px] rounded-lg"></div>
    </main>
  );
}
