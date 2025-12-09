"use client";

import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["profile"] : ["signin", "signup"];
  const pathname = usePathname();
 return (
 <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink 
            as={Link} 
            href={`/account/${link}`}
            active={pathname.includes(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        </NavItem>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
       <NavLink as={Link} href={`/account/Users`}  active={pathname.endsWith('Users')}> Users </NavLink> )}
  </Nav>

  /*
   <div id="wd-account-navigation">
     <Link href="/account/signin" className ={`nav-link ${pathname=='/account/signin' ? 'active' : ''}`}> Signin </Link> 
     <Link href="/account/signup" className={`nav-link ${pathname=='/account/signup' ? 'active' : ''}`}> Signup </Link> 
     <Link href="/account/profile" className={`nav-link ${pathname=='/account/profile' ? 'active' : ''}`}> Profile </Link> 
   </div>
  */
);
}
