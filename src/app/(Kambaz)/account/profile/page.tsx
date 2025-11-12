
"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

import Link from "next/link";
import { Button, FormControl } from "react-bootstrap";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const fetchProfile = () => {
    if (!currentUser) return redirect("/account/signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/account/signin");
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
       <div>
        <FormControl placeholder="username" id="wd-username" className="mb-4"
        defaultValue={profile.username}
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) }/>

        <FormControl placeholder="password" type="password" id="wd-password" className="mb-4" 
        defaultValue={profile.password}
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) }/>

        <FormControl placeholder="First Name" id="wd-firstname" className="mb-4" 
         defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) }/>

        <FormControl placeholder="Last Name" id="wd-lastname" className="mb-4"
        defaultValue={profile.lastName}
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />

        <FormControl type="date" id="wd-dob" className="mb-4" placeholder="mm/dd/yyyy" 
        defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>

        <FormControl type="email" id="wd-email" className="mb-4"
        defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>

        <select className="form-control mb-2" id="wd-role" 
           onChange={(e) => setProfile({ ...profile, role: e.target.value })} >
           <option value="USER">User</option>
           <option value="ADMIN">Admin</option>
           <option value="FACULTY">Faculty</option>{" "}
           <option value="STUDENT">Student</option>
         </select>
         <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
         <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
           Sign out
         </Button>
      </div>
      )}
    </div>
);}

