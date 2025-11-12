"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    if (credentials.password !== credentials.verifyPassword) {
      setPasswordMatch(false);
      setError("Passwords do not match");
      return;
    }
    
    try {
      const user = await client.signup(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
      console.error("Signup error:", err);
    }
  };
  
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <FormControl 
        className="mb-3" 
        placeholder="username" 
        id="wd-username"
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      
      <FormControl 
        className="mb-3"
        placeholder="password" 
        type="password" 
        id="wd-password"
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      
      <FormControl 
        placeholder="verify password"
        type="password" 
        id="wd-password-verify" 
        className="mb-3"
        value={credentials.verifyPassword || ""}
        onChange={(e) => {
          setCredentials({ ...credentials, verifyPassword: e.target.value });
          setPasswordMatch(e.target.value === credentials.password);
        }}
      />
      
      <Button 
        onClick={signup} 
        id="wd-signup-btn" 
        className="btn btn-primary w-100 mb-2"
        disabled={!passwordMatch}
      >
        Signup
      </Button>
      
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}