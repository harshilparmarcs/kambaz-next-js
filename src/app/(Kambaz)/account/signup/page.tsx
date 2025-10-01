import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <FormControl className="mb-3" placeholder="username" id="wd-username" />
      <FormControl className="mb-3"placeholder="password" type="password" id="wd-password" />
       <FormControl placeholder="verify password"
             type="password" id="wd-password-verify" className="mb-3" />
      <Link id="wd-signin-btn"
            href="/Dashboard"
            className="btn btn-primary w-100 mb-2">
            Signup </Link>
      <Link  href="/account/signin" > Sign in </Link>
    </div>
);
}
