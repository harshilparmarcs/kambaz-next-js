
"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../client";

export default function AssignmentEditorPage() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const isNewAssignment = aid === "new";

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid as string,
  });

  const fetchAssignment = async () => {
    if (!isNewAssignment) {
      try {
        const data = await client.findAssignmentById(aid as string);
        // Format dates for input fields
        setAssignment({
          ...data,
          dueDate: formatDateForInput(data.dueDate),
          availableFrom: formatDateForInput(data.availableFrom),
          availableUntil: formatDateForInput(data.availableUntil),
        });
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  const formatDateForInput = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handleSave = async () => {
    try {
      if (isNewAssignment) {
        await client.createAssignmentForCourse(cid as string, assignment);
      } else {
        await client.updateAssignment(assignment);
      }
      router.push(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  const handleCancel = () => {
    router.push(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="p-3">
      <h3>{isNewAssignment ? "New Assignment" : "Edit Assignment"}</h3>
      <hr />

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          placeholder="Enter assignment name"
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          placeholder="Enter assignment description"
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-9">
          <input
            type="number"
            id="wd-points"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
            }
          />
        </div>
      </div>

      {/* Due Date */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
        </div>
        <div className="col-md-9">
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />
        </div>
      </div>

      {/* Available From */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
        </div>
        <div className="col-md-9">
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
          />
        </div>
      </div>

      {/* Available Until */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
        </div>
        <div className="col-md-9">
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </div>
      </div>

      <hr />

      {/* Buttons */}
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}