
"use client";

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("40");
  const [b, setB] = useState("20");
  return (
    <div>
      <h3>Path Parameters</h3>
      <FormControl className="mb-2" id="wd-path-parameter-a" type="number" defaultValue={a}
             onChange={(e) => setA(e.target.value)}/>
      <FormControl className="mb-2" id="wd-path-parameter-b" type="number" defaultValue={b}
             onChange={(e) => setB(e.target.value)}/>
      <a className="btn btn-primary me-2" id="wd-path-parameter-add"
         href={`${HTTP_SERVER}/Lab5/add/${a}/${b}`}>
         Add {a} + {b}
      </a> &nbsp; &nbsp;
      <a className="btn btn-danger" id="wd-path-parameter-subtract" 
         href={`${HTTP_SERVER}/Lab5/subtract/${a}/${b}`}>
         Substract {a} - {b}
      </a> &nbsp; &nbsp;
      <a className="btn btn-primary" id="wd-path-parameter-subtract" 
         href={`${HTTP_SERVER}/Lab5/multiply/${a}/${b}`}>
         Multiply {a} * {b}
      </a> &nbsp; &nbsp;
      <a className="btn btn-primary" id="wd-path-parameter-subtract" 
         href={`${HTTP_SERVER}/Lab5/divide/${a}/${b}`}>
         Divivde {a} / {b}
      </a>
      <hr />
    </div>
  );
}
