
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import * as client from "./client";

export default function AssignmentsPage() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<any[]>([]);

  const fetchAssignments = async () => {
    try {
      const data = await client.findAssignmentsForCourse(cid as string);
      setAssignments(data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleDeleteAssignment = async (assignmentId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (confirmDelete) {
      try {
        await client.deleteAssignment(assignmentId);
        setAssignments(assignments.filter((a) => a._id !== assignmentId));
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div id="wd-assignments">
      {/* Header with Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search for Assignments"
        />
        <Link
          href={`/Kambaz/Courses/${cid}/Assignments/new`}
          className="btn btn-danger"
        >
          <FaPlus className="me-2" />
          Assignment
        </Link>
      </div>

      {/* Assignments List */}
      <div className="wd-assignments-list">
        <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
          </div>
          <IoEllipsisVertical className="fs-4" />
        </div>

        <ul className="list-group rounded-0">
          {assignments.length === 0 ? (
            <li className="list-group-item p-3 text-muted">
              No assignments found. Click "+ Assignment" to create one.
            </li>
          ) : (
            assignments.map((assignment) => (
              <li
                key={assignment._id}
                className="list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-3 fs-3 text-success" />
                  <div>
                    <Link
                      href={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small className="text-muted">
                      <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until</strong>{" "}
                      {formatDate(assignment.availableFrom)} |
                      <strong> Due</strong> {formatDate(assignment.dueDate)} |
                      {assignment.points} pts
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Link
                    href={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="btn btn-sm btn-outline-secondary me-2"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-danger me-2"
                    onClick={() => handleDeleteAssignment(assignment._id)}
                  >
                    <FaTrash />
                  </button>
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}