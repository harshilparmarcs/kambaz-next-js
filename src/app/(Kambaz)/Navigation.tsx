
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineBook, AiOutlineCalendar, AiOutlineDashboard, AiOutlineInbox, AiOutlineSetting } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    {label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard},
    {label: "Courses", path: "/Dashboard", icon: AiOutlineBook},
    {label: "Calendar", path: "/Calendar", icon: AiOutlineCalendar},
    {label: "Inbox", path: "/Inbox", icon: AiOutlineInbox},
    {label: "Labs", path: "/Labs", icon: AiOutlineSetting},
  ]
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120}} id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a" target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.jpg" width="75px" alt="Northeastern University" />
      </ListGroupItem>

    <ListGroupItem as={Link} href="/account" className={`border-0 bg-black text-center ${pathname.includes('account') ? 'bg-white text-danger' : "bg-black text-white"}`}>
         <FaRegCircleUser className={`fs-1 ${pathname.includes("account") ? "text-danger" : "text-white"}`}/>
         <br />
         Account
    </ListGroupItem>

    {links.map( (link) => (
      <ListGroupItem key={link.label} as={Link} href={link.path} className={`border-0 bg-black text-center 
      ${pathname.includes(link.label) ? 'bg-white text-danger' : "bg-black text-white"}`}>
      {link.icon({className: "fs-1 text-danger"})}
      <br />
      {link.label}
      </ListGroupItem>
    ))}
  </ListGroup>
  );
}
