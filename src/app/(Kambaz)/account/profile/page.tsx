import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl defaultValue="alice" placeholder="username" id="wd-username" className="mb-4"/>
      <FormControl defaultValue="123"   placeholder="password" type="password"
             id="wd-password" className="mb-4" />
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-4" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-4" />
      <FormControl type="date" id="wd-dob" className="mb-4" placeholder="mm/dd/yyyy" />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-4"/>
      <FormControl defaultValue="User" type="tel" id="wd-phone" className="mb-4"/>
      <Link href="/account/signin" className="btn btn-danger w-100 mb-2 bg-color-red" > Sign out </Link>
    </div>
);
}

