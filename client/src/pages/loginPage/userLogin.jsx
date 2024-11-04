import React, { useState } from "react";
import { TextField, FormControl, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar"; // Ensure Navbar is correctly imported

const UserLogin = () => {
    //modify accordingly
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //modify accordingly
    const handleSubmit = (event) => {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email === '') {
            setEmailError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }

        if (email && password) {
            console.log(email, password);
            // Perform login logic here
        }
    };

    return (
        <>
            <Navbar />
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
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        variant="outlined"
                        type="email"
                        fullWidth
                        value={email}
                        error={emailError}
                        helperText={emailError ? "Email is required" : ""}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        error={passwordError}
                        helperText={passwordError ? "Password is required" : ""}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        sx={{ fontWeight: 'bold', py: 1.5, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default UserLogin;
