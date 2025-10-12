"use client";

import Link from "next/link";
import { use } from "react";
import { usePathname } from "next/navigation";
import "./styles.css";

interface CourseNavigationProps {
  cid: string;
}

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const pathname = usePathname();

  return (

    <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link}
              href={`/Courses/${cid}/${link}`}
              id={`wd-course-${link.toLowerCase()}-link`}
              className={`list-group-item border-0 ${pathname == `/Courses/${cid}/${link}` ? 'active' : ''}`}>
            {link}
        </Link>
      ))}
      </div>
  );
}