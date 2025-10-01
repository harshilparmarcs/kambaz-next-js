import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineBook, AiOutlineCalendar, AiOutlineDashboard, AiOutlineInbox, AiOutlineSetting } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
export default function KambazNavigation() {
  return (
    <div>
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 100}} id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a" target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.jpg" width="50px" alt="Northeastern University" />
      </ListGroupItem>

     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="icon-small fs-1 text-white"/>
         <br />
         Account
       </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-white text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
        <AiOutlineBook className="fs-1 text-danger" />
        <br />
        Courses
        </Link>
      </ListGroupItem>


      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Calendar" id="wd-calendar-link" className="text-danger text-decoration-none">
        <AiOutlineCalendar className="fs-1 text-danger" />
        <br />
         Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Inbox" id="wd-inbox-link" className="text-danger text-decoration-none">
        <AiOutlineInbox className="fs-1 text-danger" />
        <br />
         Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Labs" id="wd-labs-link" className="text-danger text-decoration-none">
        <AiOutlineSetting className="fs-1 text-danger" />
        <br />
         Labs
        </Link>
      </ListGroupItem>
    
    </ListGroup>
    </div>
);
}
