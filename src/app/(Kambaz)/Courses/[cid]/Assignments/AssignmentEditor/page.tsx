import { Button, Col, Form, FormControl, FormLabel, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";


export default function AssignmentEditor() {
  return (
    
   <div id="wd-assignments-editor" className="me-5">
      <Form>
        
        <div className="mb-3">
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl type="text" id="wd-name" defaultValue="A1" />
        </div>
        
        <div className="mb-3">
          <div className="border rounded p-3" style={{ minHeight: "180px" }}>
            <p>The assignment is <span className="text-danger">available online</span></p>
            <p>Submit a link to the landing page of your Web application running on Netlify.</p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>The Kanbas application should include a link to navigate back to the landing page.</p>
          </div>
        </div>

        
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="number" id="wd-points" defaultValue={100} max={100} />
          </Col>
        </Row>

        
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-group" className="mb-0">Assignment Group</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
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
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
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
              <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
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
                  <FormControl type="text" id="wd-due-date" defaultValue="May 13, 2024, 11:59 PM" />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>

              
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-from" className="fw-bold">Available from</FormLabel>
                    <div className="input-group">
                      <FormControl type="text" id="wd-available-from" defaultValue="May 6, 2024, 12:1" />
                      <span className="input-group-text"><FaCalendarAlt /></span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-until" className="fw-bold">Until</FormLabel>
                    <div className="input-group">
                      <FormControl type="text" id="wd-available-until" placeholder="Select date" />
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
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}