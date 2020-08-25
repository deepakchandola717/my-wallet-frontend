import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const months = [
  {
    value: 1,
    label: 'January 2019',
  },
  {
    value: 2,
    label: 'February 2019',
  },
  {
    value: 3,
    label: 'March 2019',
  },
  {
    value: 4,
    label: 'April 2019',
  },
  {
    value: 5,
    label: 'May 2019',
  },
  {
    value: 6,
    label: 'June 2019',
  },
  {
    value: 7,
    label: 'July 2019',
  },
  {
    value: 8,
    label: 'August 2019',
  },
  {
    value: 9,
    label: 'September 2019',
  },
  {
    value: 10,
    label: 'October 2019',
  },
  {
    value: 11,
    label: 'November 2019',
  },
  {
    value: 12,
    label: 'December 2019',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MonthSelector(props) {
  const classes = useStyles();
  const {monthType, monthUpdater, selectedMonth} = props;
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-month"
          select
          label={`${monthType} month`}
          value={selectedMonth}
          onChange={(e)=>monthUpdater(monthType, e.target.value)}
          helperText={`Please select your ${monthType} month`}
          variant="outlined"
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}