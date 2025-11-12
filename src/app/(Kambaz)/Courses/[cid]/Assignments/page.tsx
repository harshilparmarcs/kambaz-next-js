"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "./reducer";
import * as client from "./client";
import Link from "next/link";
import { Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();

  console.log("CID:", cid);
  console.log("Fetching assignments...");

  const router = useRouter();
  const dispatch = useDispatch();
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  
  const isFaculty = currentUser?.role === "FACULTY";
  
  const fetchAssignments = async () => {
    console.log("Inside fetchAssignments");
    try {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      console.log("Fetched assignments:", assignments); 
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };
  
  useEffect(() => {
    fetchAssignments();
  }, [cid]);
  
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
  const filteredAssignments = courseAssignments.filter((assignment: any) =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  
  const handleDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteDialog(true);
  };
  
  const confirmDelete = async () => {
    if (assignmentToDelete) {
      try {
        await client.deleteAssignment(assignmentToDelete);
        dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentToDelete)));
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };
  
  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };
  
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <CiSearch />
          </span>
          <input 
            type="text" 
            className="form-control border-start-0" 
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        
        {isFaculty && (
          <div>
            <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </Button>
            <Button 
              variant="danger" 
              size="lg" 
              id="wd-add-assignment"
              onClick={handleAddAssignment} 
            >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </Button>
          </div>
        )}
      </div>
      
      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 fw-normal">40% of Total</span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          
          <ListGroup className="rounded-0">
            {filteredAssignments.map((assignment: any) => (
              <ListGroupItem 
                key={assignment._id} 
                className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start border-start-0 border-end-0"
              >
                <BsGripVertical className="me-2 fs-3 mt-1" />
                <MdOutlineAssignment className="me-3 fs-3 mt-1 text-success" />
                
                <div className="flex-grow-1">
                  <Link 
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link fw-bold text-dark text-decoration-none"
                  >
                    {assignment.title}
                  </Link>
                  
                  <div className="text-danger small mt-1">
                    Multiple Modules
                  </div>
                  
                  <div className="small text-muted mt-1">
                    <span className="fw-bold">Not available until: </span>
                    {formatDate(assignment.availableFromDate || assignment.availableFrom)}
                  </div>
                  
                  <div className="small mt-1">
                    <span className="fw-bold">Due: </span>
                    {formatDate(assignment.dueDate)} | {assignment.points} pts
                  </div>
                </div>
                
                <div className="float-end d-flex align-items-center">
                  {isFaculty && (
                    <Button
                      variant="link"
                      className="text-danger p-0 me-2"
                      onClick={() => handleDelete(assignment._id)}
                    >
                      <BsTrash />
                    </Button>
                  )}
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4 ms-2" />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
      
      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteDialog(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}