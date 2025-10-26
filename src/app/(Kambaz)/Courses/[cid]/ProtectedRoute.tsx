
"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProtectedCourseRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    // Faculty can access all courses
    if (currentUser?.role === "FACULTY") {
      return;
    }

    // Check if student is enrolled
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === cid
    );

    // Redirect to dashboard if not enrolled
    if (!isEnrolled) {
      alert("You must be enrolled in this course to access it.");
      router.push("/dashboard");
    }
  }, [currentUser, enrollments, cid, router]);

  return <>{children}</>;
}