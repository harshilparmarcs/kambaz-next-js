import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" style={
        { display: "flex", flexWrap: "wrap", gap: "20px" }
      }>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/webdev.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5678 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Web Developer Bootcamp
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5011" className="wd-dashboard-course-link">
            <Image src="/images/software.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5011 Software Development </h5>
              <p className="wd-dashboard-course-title">
                Software Developer
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5012" className="wd-dashboard-course-link">
            <Image src="/images/cloud.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5012 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Computing Practioner
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5013" className="wd-dashboard-course-link">
            <Image src="/images/ui.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5013 UI/UX Design </h5>
              <p className="wd-dashboard-course-title">
                UI/UX
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5014" className="wd-dashboard-course-link">
            <Image src="/images/ai.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5014 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">
                AI Engineer
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5015" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5015 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Engineer
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>

        <div className="wd-dashboard-course"> 
          <Link href="/Courses/5016" className="wd-dashboard-course-link">
            <Image src="/images/data.jpg" alt=""width={300} height={200} />
            <div>
              <h5> CS5016 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Data Scientist
              </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>


      </div>
    </div>
);
}

