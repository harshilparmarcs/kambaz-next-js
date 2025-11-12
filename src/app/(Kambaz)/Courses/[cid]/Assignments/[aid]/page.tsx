"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "../reducer";
import * as client from "../client";
import { Button, Col, Form, FormControl, FormLabel, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const isNewAssignment = aid === "new";
  
  const [assignment, setAssignment] = useState<any>({
    _id: "",
    title: "New Assignment",
    course: cid,
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    assignmentGroup: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
  });
  
  useEffect(() => {
    if (!isNewAssignment) {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments, isNewAssignment]);
  
  const handleSave = async () => {
    try {
      if (isNewAssignment) {
        const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
        dispatch(setAssignments([...assignments, newAssignment]));
      } else {
        await client.updateAssignment(assignment);
        dispatch(setAssignments(
          assignments.map((a: any) => (a._id === assignment._id ? assignment : a))
        ));
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };
  
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  
  if (!isNewAssignment && !assignment._id) {
    return <div>Assignment not found</div>;
  }
  
  return (
    <div id="wd-assignments-editor" className="me-5">
      <Form>
        <h3>{isNewAssignment ? "New Assignment" : `Edit Assignment: ${assignment.title}`}</h3>
        
        <div className="mb-3">
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl 
            type="text" 
            id="wd-name" 
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>
        
        <div className="mb-3">
          <FormLabel htmlFor="wd-description">Description</FormLabel>
          <FormControl
            as="textarea"
            rows={8}
            id="wd-description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>
        
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl 
              type="number" 
              id="wd-points" 
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
              max={100} 
            />
          </Col>
        </Row>
        
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-group" className="mb-0">Assignment Group</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select 
              id="wd-group" 
              value={assignment.assignmentGroup}
              onChange={(e) => setAssignment({ ...assignment, assignmentGroup: e.target.value })}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Row>
        
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select 
              id="wd-display-grade-as" 
              value={assignment.displayGradeAs}
              onChange={(e) => setAssignment({ ...assignment, displayGradeAs: e.target.value })}
            >
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-submission-type" className="mb-0 pt-2">Submission Type</FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Select 
                id="wd-submission-type" 
                value={assignment.submissionType}
                onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
                className="mb-3"
              >
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
                <option value="External Tool">External Tool</option>
              </Form.Select>
              
              <div>
                <FormLabel className="fw-bold mb-2">Online Entry Options</FormLabel>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-1" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-1" />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-1" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-1" />
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col md={3} className="text-end">
            <FormLabel className="mb-0 pt-2">Assign</FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <div className="mb-3">
                <FormLabel htmlFor="wd-assign-to" className="fw-bold">Assign to</FormLabel>
                <div className="border rounded p-2 bg-white">
                  <span className="badge bg-light text-dark border d-inline-flex align-items-center">
                    Everyone
                    <button type="button" className="btn-close ms-2" aria-label="Close" style={{ fontSize: "0.6rem" }}></button>
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <FormLabel htmlFor="wd-due-date" className="fw-bold">Due</FormLabel>
                <div className="input-group">
                  <FormControl 
                    type="date" 
                    id="wd-due-date" 
                    value={assignment.dueDate}
                    onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                  />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>
              
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-from" className="fw-bold">Available from</FormLabel>
                    <div className="input-group">
                      <FormControl 
                        type="date" 
                        id="wd-available-from" 
                        value={assignment.availableFromDate}
                        onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
                      />
                      <span className="input-group-text"><FaCalendarAlt /></span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-until" className="fw-bold">Until</FormLabel>
                    <div className="input-group">
                      <FormControl 
                        type="date" 
                        id="wd-available-until" 
                        value={assignment.availableUntilDate}
                        onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
                      />
                      <span className="input-group-text"><FaCalendarAlt /></span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        <hr />
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="danger" onClick={handleSave}>Save</Button>
        </div>
      </Form>
    </div>
  );
}