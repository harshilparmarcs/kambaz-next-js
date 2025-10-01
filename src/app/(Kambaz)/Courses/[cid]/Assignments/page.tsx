"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import GreenCheckmark from "../Modules/GreenCheckmark";

interface Assignment {
  id: string;
  title: string;
  availableFrom: string;
  dueDate: string;
  points: number;
}

export default function Assignments() {
  const params = useParams();
  const cid = params.cid as string;

  const assignments: Assignment[] = [
    {
      id: "A1",
      title: "ENV + HTML",
      availableFrom: "May 6 at 12:00am",
      dueDate: "May 13 at 11:59pm",
      points: 100
    },
    {
      id: "A2",
      title: "CSS + BOOTSTRAP",
      availableFrom: "May 13 at 12:00am",
      dueDate: "May 20 at 11:59pm",
      points: 100
    },
    {
      id: "A3",
      title: "JAVASCRIPT + REACT",
      availableFrom: "May 20 at 12:00am",
      dueDate: "May 27 at 11:59pm",
      points: 100
    }
  ];

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
          />
        </div>
        
        <div>
          <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
        </div>
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
            {assignments.map((assignment) => (
              <ListGroupItem 
                key={assignment.id} 
                className="wd-assignment-list-item p-3 ps-1 d-flex align-items-start border-start-0 border-end-0"
              >
                <BsGripVertical className="me-2 fs-3 mt-1" />
                <MdOutlineAssignment className="me-3 fs-3 mt-1 text-success" />
                
                <div className="flex-grow-1">
                  <Link 
                    href={`/Courses/${cid}/Assignments/AssignmentEditor`}
                    className="wd-assignment-link fw-bold text-dark text-decoration-none"
                  >
                    {assignment.id} - {assignment.title}
                  </Link>
                  
                  <div className="text-danger small mt-1">
                    Multiple Modules
                  </div>
                  
                  <div className="small text-muted mt-1">
                    <span className="fw-bold">Not available until</span> {assignment.availableFrom} |
                  </div>
                  
                  <div className="small mt-1">
                    <span className="fw-bold">Due</span> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>

                <div className="float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}