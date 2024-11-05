import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import sampleTransactionData from "./sampleTransactionData.json";
import UserNav from "../../components/DashboardNavigation/UserNav"; // Assuming UserNav is in the same directory

export default function TransactionHistory() {
    const data = sampleTransactionData;

    return (
        <Box 
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: 500, md: 600 },
                bgcolor: 'background.paper',
                margin: '0 auto',
                p: 2
            }}
        >
            <UserNav />  {/* UserNav component added here */}
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{ textAlign: 'center', mb: 2 }}
            >
                Transaction History
            </Typography>

            <List
                sx={{
                    width: '100%',
                    maxHeight: 400,
                    overflow: 'auto',
                    bgcolor: 'background.paper',
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {data.map((transaction, index) => (
                    <li key={`section-${index}`}>
                        <ul>
                            <ListSubheader>{`Transaction - ${index + 1}`}</ListSubheader>
                            <ListItem key={`item-${index}`}>
                                <ListItemText primary={`Party Email ID: ${transaction.partyEmailId}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`Status: ${transaction.status}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`Units Exchanged: ${transaction.unitsExchanged}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`Amount Spent (INR): ${transaction.amountSpentINR}`} />
                            </ListItem>
                        </ul>
                    </li>
                ))}
            </List>
        </Box>
    );
}
