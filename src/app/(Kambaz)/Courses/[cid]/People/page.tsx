
"use client";
import { useState, useEffect, useCallback } from "react";
import PeopleTable from "./PeopleTable";
import * as client from "../../../account/client";

export default function PeoplePage() {
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = useCallback(async () => {
        try {
            const data = await client.findAllUsers(); // adjust based on your client API
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}