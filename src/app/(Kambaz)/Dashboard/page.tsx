"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import * as client from "../Courses/client";
import * as enrollmentsClient from "../Enrollments/client";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/[cid]/reducer";
import { setEnrollments, enrollCourse, unenrollCourse } from "../Enrollments/reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg", 
    description: "New Description"
  });
  
  const fetchCourses = async () => {
    try {
      if (currentUser?.role === "FACULTY" || showAllCourses) {
        const allCourses = await client.fetchAllCourses();
        dispatch(setCourses(allCourses));
      } else {
        const courses = await client.findMyCourses();
        dispatch(setCourses(courses));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
  try {
    if (currentUser?._id) {
      const enrollments = await enrollmentsClient.findEnrollmentsForUser(currentUser._id);
      dispatch(setEnrollments(enrollments));
    }
  } catch (error) {
    console.error("Error fetching enrollments:", error);
  }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};

  
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser, showAllCourses]);
  
  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseId
    );
  };
  
  // Handle enroll
  const handleEnroll = async (courseId: string) => {
    try {
      const newEnrollment = await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
      dispatch(enrollCourse(newEnrollment));
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };
  
  // Handle unenroll
  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } catch (error) {
      console.error("Error unenrolling:", error);
    }
  };
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            > 
              Add 
            </button>
            <button 
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} 
              id="wd-update-course-click"
            >
              Update 
            </button>
          </h5><br />
          <FormControl 
            value={course.name} 
            className="mb-2"  
            onChange={(e) => setCourse({ ...course, name: e.target.value })} 
          />
          <FormControl 
            as="textarea" 
            value={course.description} 
            rows={3} 
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}
      
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        {currentUser?.role !== "FACULTY" && (
          <Button 
            variant="primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
            id="wd-enrollments-btn"
          >
            {showAllCourses ? "Show My Courses" : "Show All Courses"}
          </Button>
        )}
      </div>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{width: "300px"}}>
              <Card>
                <Link 
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    // Prevent navigation if not enrolled (for non-faculty)
                    if (currentUser?.role !== "FACULTY" && !isEnrolled(course._id)) {
                      e.preventDefault();
                      alert("You must enroll in this course to access it.");
                    }
                  }}
                >
                  <CardImg src={course.image} variant="top" width="100%" height={"160px"}/>
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }} 
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button 
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    
                    {currentUser?.role !== "FACULTY" && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-unenroll-course-click"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                            className="btn btn-success float-end"
                            id="wd-enroll-course-click"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div> 
  );
}