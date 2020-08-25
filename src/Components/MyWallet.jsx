import React from 'react';
import Box from '@material-ui/core/Box';
import HeaderBar from './HeaderBar';
import TransactionsTable from './TransactionsTable';
import Calculator from './Calculator';
import { Container, Typography } from '@material-ui/core';

const MyWallet = () => {
    return ( 
        <>
        <HeaderBar/>
        <Container>
        <Box display="flex" flexDirection="row" margin="1rem 0" flexWrap="wrap">
            <Box display="flex" flexDirection="column" width="45rem" margin="1rem">
            <Typography>Transactions</Typography>
            <TransactionsTable/>
            </Box>
            <Box display="flex" flexDirection="column" width="25rem" margin="1rem">
            <Typography>Calculator</Typography>
            <Calculator/>
            </Box>
        </Box>
        </Container>
        </>
     );
}
 
export default MyWallet;