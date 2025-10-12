
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";


export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
 const pathname = usePathname();
 const currentPage = pathname.split("/").pop();

 const formattedPage = currentPage ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1) : "";
 return (
    <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course?.name} &gt; {formattedPage}
    </h2>
 );
}
