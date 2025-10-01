import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
        <Col className = "wd-dashboard-course">
          
        <div className="wd-dashboard-course">
          <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
              Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </div>
        </Col>

        <Col className = "wd-dashboard-course">
        <div className="wd-dashboard-course">
          <Card>  
          <Link href="/Courses/5678" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg src="/images/webdev.jpg" width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Web Development </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                Web Developer Bootcamp
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </div>
        </Col>
        
        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course"> 
          <Card>
          <Link href="/Courses/5011" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg src="/images/software.jpg" width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5011 Software Development </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                Software Developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card> 
        </div>
        </Col>

        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course">
          <Card> 
          <Link href="/Courses/5012" className="wd-dashboard-course-link">
            <CardImg src="/images/cloud.jpg" alt=""width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5012 Cloud Computing</CardTitle> 
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                Cloud Computing Practioner
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card> 
        </div>
        </Col>

        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course"> 
          <Card>
          <Link href="/Courses/5013" className="wd-dashboard-course-link">
            <CardImg src="/images/ui.jpg" alt=""width="100%" height={200} />
            <CardBody>

              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden" > CS5013 UI/UX Design </CardTitle>

              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                UI/UX
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link> 
          </Card>
        </div>
        </Col>

        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course">
          <Card> 
          <Link href="/Courses/5014" className="wd-dashboard-course-link">
            <CardImg src="/images/ai.jpg" alt=""width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5014 Artificial Intelligence</CardTitle>
              
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                AI Engineer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link> 
          </Card>
        </div>
        </Col>

        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course"> 
          <Card> 
          <Link href="/Courses/5015" className="wd-dashboard-course-link">
            <CardImg src="/images/ml.jpg" alt=""width={500} height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5015 Machine Learning </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                Machine Learning Engineer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link> 
          </Card>
        </div>
        </Col>


        <Col className = "wd-dashboard-course" >
        <div className="wd-dashboard-course"> 
          <Card>
          <Link href="/Courses/5016" className="wd-dashboard-course-link">
            <CardImg src="/images/data.jpg" alt=""width="100%" height={200} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5016 Data Science </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                Data Scientist
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link> 
          </Card>
        </div>
        </Col>
        </Row>
        </div>
      </div>
);
}

