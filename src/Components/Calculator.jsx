import React, { useState } from 'react';
import { Card, Button, Typography, Container, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MonthSelector from './MonthSelector';
import { calculateTransactions } from '../Utils/transactions';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        padding:'2rem 1rem',
    }
  }));

const Calculator = () => {
    const classes = useStyles();

    const [startMonth, setStartMonth] = useState(1);
    const [endMonth, setEndMonth] = useState(2);
    const [totalCredit, setTotalCredit] = useState('0.00');
    const [totalDebit, setTotalDebit] = useState('0.00');
    const [totalBalance, setTotalBalance] = useState('0.00');

    const updateMonth=(monthType, month)=>{
        if(monthType==='start'){
            (endMonth>=month)&&setStartMonth(month);
        }else{
            (startMonth<=month)&&setEndMonth(month);
        }
    }

    const calculate = (startingMonth, endingMonth) =>{
        const defaultUserId = 1;
        calculateTransactions(defaultUserId, startingMonth, endingMonth)
            .then(res=>{
                setTotalBalance(res.balance);
                setTotalCredit(res.totalTransactions.credit);
                setTotalDebit(res.totalTransactions.debit);
            })
    }

    return ( 
        <div className={classes.root}>
        <Card className={classes.card}>
            <Container>
            <Typography gutterBottom variant={'subtitle1'}>Calculate credit, debit and balance between selected months</Typography>
            <MonthSelector monthType ={'start'} monthUpdater={updateMonth} selectedMonth={startMonth}/>
            <br/>
            <MonthSelector monthType ={'end'} monthUpdater={updateMonth} selectedMonth={endMonth}/>
            <Button variant="contained" color="primary" onClick={()=>calculate(startMonth, endMonth)}>Calculate</Button>
            <br/>
            <br/>
            <Divider/>
            <Box display="flex" justifyContent="space-between" margin="12px">
                <Box>
                    <Typography variant="body2">Total Credit</Typography>
                    <Typography>{totalCredit}</Typography>
                </Box>
                <Box>
                    <Typography variant="body2">Total Debit</Typography>
                    <Typography>{totalDebit}</Typography>
                </Box>
                <Box>
                    <Typography variant="body2">Total Balance</Typography>
                    <Typography>{totalBalance}</Typography>
                </Box>
            </Box>
            </Container>
        </Card>
        </div>
     );
}
 
export default Calculator;