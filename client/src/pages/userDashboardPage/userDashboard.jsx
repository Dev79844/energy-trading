import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNav from "../../components/DashboardNavigation/UserNav";
import { Divider, Typography } from "@mui/material";

export default function UserDashboard() {

    //modify accordingly
    const userData = useState({
        emailId: "",
        unitsSold: 0,
        unitsPurchased: 0,
        balance: 0
    });

    const [amountToAdd, setAmountToAdd] = useState(0);

    useEffect(() => {
        //add logic here
    });

    //to modify
    return (
        <>
            <UserNav />
            <Box>
                <Typography variant="h5">
                    Your Stats
                </Typography>
                <Typography>
                    Email Id: {userData.emailId}
                </Typography>
                <Typography>
                    Units Sold: {userData.unitsSold}
                </Typography>
                <Typography>
                    Units Purchased: {userData.unitsSold}
                </Typography>
                <Typography>
                    Account Balance: {userData.balance}
                </Typography>

                <Divider>
                    {/*Add component*/}
                </Divider>
            </Box>
        </>
    );
}
