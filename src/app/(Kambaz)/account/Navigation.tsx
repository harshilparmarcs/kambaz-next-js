"use client";

import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
 return (
   <div id="wd-account-navigation">
     <Link href="/account/signin" className ={`nav-link ${pathname=='/account/signin' ? 'active' : ''}`}> Signin </Link> 
     <Link href="/account/signup" className={`nav-link ${pathname=='/account/signup' ? 'active' : ''}`}> Signup </Link> 
     <Link href="/account/profile" className={`nav-link ${pathname=='/account/profile' ? 'active' : ''}`}> Profile </Link> 
   </div>
);
}
