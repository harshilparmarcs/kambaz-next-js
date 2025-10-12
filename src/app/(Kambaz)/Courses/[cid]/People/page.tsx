
"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function PeopleTable() {
    const { cid } = useParams();
    const people = db.people.filter((person: any) => person.course === cid);
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                    {people.map((person: any) => (
                        <tr key={person._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{person.firstName}</span>{" "}
                                <span className="wd-last-name">{person.lastName}</span>
                            </td>
                            <td className="wd-login-id">{person.loginId}</td>
                            <td className="wd-section">{person.section}</td>
                            <td className="wd-role">{person.role}</td>
                            <td className="wd-last-activity">{person.lastActivity}</td>
                            <td className="wd-total-activity">{person.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div> 
    );
}