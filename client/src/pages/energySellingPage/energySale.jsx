import React, { useState } from "react";
import axios from "axios";
import { TextField, FormControl, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserNav from "../../components/DashboardNavigation/UserNav";
import dataAdditionFunction from "./dataAdditionFunction";

const energySale = () => {
    //modify accordingly
    const [offerData, setOfferData] = useState({
        numberOfUnits: 0,
        amountQuoted: 0
    });

    const navigate = useNavigate();

    //modify accordingly
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            //modify accordingly

            //for now, I will just add file data modification logic for demo purposes
            const newData = {
                email: localStorage.getItem("email"),
                amountQuoted: offerData.amountQuoted,
                numberOfUnits: offerData.numberOfUnits
            }

            //IMP: check if this works properly or not
            dataAdditionFunction(newData);

            console.log("Success!");
            alert("Offer created successfully!");
        } catch (error) {
            console.log("Error: ", error);
            alert("Error creating offer!");
        }
    };

    return (
        <>
            <UserNav />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: '100vh',
                    width: '100vw',
                    bgcolor: "dark",
                    px: 2
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 400,
                        width: '100vw',
                        p: 4,
                        bgcolor: "background.paper",
                        boxShadow: 3,
                        borderRadius: 2,
                        textAlign: "center"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h4" component="h2" color="black" fontWeight="bold" gutterBottom>
                        Number of Units To Sell
                    </Typography>
                    <TextField
                        label="numberOfUnits"
                        onChange={e => setOfferData(prevData => ({
                            ...prevData,
                            numberOfUnits: e.target.value
                        }))}
                        required
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={offerData.numberOfUnits}
                        helperText={"Enter number of units to sell: "}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="amountQuoted"
                        onChange={e => setOfferData(prevData => ({
                            ...prevData,
                            amountQuoted: e.target.value
                        }))}
                        required
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={offerData.amountQuoted}
                        helperText={"Enter amount to sell units for: "}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        sx={{ fontWeight: 'bold', py: 1.5, mb: 2 }}
                    >
                        Create Offer
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default energySale;
