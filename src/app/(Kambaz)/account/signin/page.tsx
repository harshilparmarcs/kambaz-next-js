
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign in failed");
      console.error("Signin error:", err);
    }
 };

  return (
    <div id="wd-signin-screen">
      <h3>Signin</h3>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}  
             id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
             id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div> );}

function setError(arg0: any) {
  throw new Error("Function not implemented.");
}
