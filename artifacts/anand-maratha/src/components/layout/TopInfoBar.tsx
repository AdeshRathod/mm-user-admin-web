import React from "react";

export function TopInfoBar() {
  return (
    <div className="w-full bg-primary text-white text-sm py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
        <p className="font-serif text-sm text-center md:text-left">मराठा मंगलच्या वेबसाईटवर आपले स्वागत आहे..!</p>
        <div className="flex space-x-6">
          <a href="tel:+917888036366" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 7888036366</span>
          </a>
          <a href="mailto:info@marathamangal.com" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>info@marathamangal.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
