import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNav from "../components/UserNav";

export default function UserDashboard() {

    useEffect(() => {
        //add logic here
    }, []);

    //to modify
    return (
        <>
            <UserNav />
            <h1>Hello World!</h1>
        </>
    );
}
