import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNav from "../../components/DashboardNavigation/UserNav";
import { Box, Divider, Typography, TextField, Button } from "@mui/material";

export default function UserDashboard() {
    const [userData, setUserData] = useState({
        emailId: "example@gmail.com",
        unitsSold: 0,
        unitsPurchased: 0,
        balance: 0,
        transactionsDone: 0
    });
    const [amountToAdd, setAmountToAdd] = useState(0);

    useEffect(() => {
        // Example to fetch user data
        // axios.get("/api/userData")
        //     .then(response => setUserData(response.data))
        //     .catch(error => console.error("Failed to fetch user data:", error));  
    }, []);

    const handleUpdateBalance = () => {
        const newBalance = userData.balance + amountToAdd;
        setUserData(prevData => ({ ...prevData, balance: newBalance }));
        setAmountToAdd(0); // Reset the amount to add after updating

        // can send the updated balance to your backend here
        // axios.post("/api/updateBalance", { balance: newBalance })
        //     .then(response => console.log("Balance updated:", response.data))
        //     .catch(error => console.error("Failed to update balance:", error));
    };

    return (
        <>
            <UserNav />
            <Box sx={{ p: 3, maxWidth: 500, margin: "auto" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Your Stats
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Email Id:</strong> {userData.emailId}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Units Sold:</strong> {userData.unitsSold}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Units Purchased:</strong> {userData.unitsPurchased}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Transactions Done:</strong> {userData.transactionsDone}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Account Balance:</strong> ${userData.balance}
                </Typography>

                <Divider sx={{ my: 2 }} textAlign="left">
                    Balance to update
                </Divider>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <TextField
                        type="number"
                        label="Amount to Add"
                        variant="outlined"
                        value={amountToAdd}
                        onChange={(e) => setAmountToAdd(Number(e.target.value))}
                        sx={{ mb: 2, width: "100%" }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdateBalance}
                        sx={{ width: "100%" }}
                    >
                        Update Balance
                    </Button>
                </Box>
            </Box>
        </>
    );
}
