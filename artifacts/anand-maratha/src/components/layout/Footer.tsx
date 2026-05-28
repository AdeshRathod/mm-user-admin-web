import React from "react";
import { Link } from "wouter";
import logoSrc from "@assets/download_1779972877490.png";

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white/90 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <img src={logoSrc} alt="Maratha Mangal" className="h-14 w-auto object-contain" />
            <p className="text-sm leading-relaxed text-white/70">Maratha Mangal, the leading Marathi Matrimony service provider for the Marathi community has the network in all over Maharashtra with a well mannered and traditional associates to assist you in search for a partner.</p>
            
            <div className="pt-2 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p className="text-white/70">Bibwewadi, Pune 411037</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+917888036366" className="text-primary hover:text-primary/80 transition-colors font-medium">+91 7888036366</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@marathamangal.com" className="text-primary hover:text-primary/80 transition-colors font-medium">info@marathamangal.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Home</Link></li>
              <li><Link href="/rules" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Rules</Link></li>
              <li><Link href="/enroll" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Enroll</Link></li>
              <li><Link href="/renew" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Renew</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Search Profiles</h4>
            <ul className="space-y-3">
              <li><Link href="/profiles/grooms" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Maratha Grooms</Link></li>
              <li><Link href="/profiles/brides" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Maratha Brides</Link></li>
              <li><Link href="/profiles/divorcee-grooms" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Divorcee Grooms</Link></li>
              <li><Link href="/profiles/divorcee-brides" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Divorcee Brides</Link></li>
              <li><Link href="/search/id" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Single ID Search</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Legal & Support</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Refund Policy</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors flex items-center gap-2 text-white/70"><span className="text-primary">›</span> Member Safety Guidelines</Link></li>
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Maratha Mangal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
