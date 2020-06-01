import React, {useState} from 'react';
import { Formik, Form } from 'formik';
//import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import '../Form-Component/FormComponent.css';

const RiskTypes = [
    {
      value: 'People',
      label: 'People',
    },
    {
      value: 'Closed',
      label: 'Closed',
    },
    {
      value: 'Open',
      label: 'Open',

    },
    {
      value: 'Closed',
      label: 'Closed',

    },
  ];

  const InternalExternals = [
    {
        value: 'Internal',
        label: 'Internal'
    },
    {
        value: 'External',
        label: 'External'
    }
  ];

  const owners = [
    {
        value: 'Kasturi',
        label: 'Kasturi'
    },
    {
        value: 'Uday',
        label: 'Uday'
    },
    {
        value: 'Ameya',
        label: 'Ameya'
    },
    {
        value: 'Aniket',
        label: 'Aniket'
    },
  ];

  const Severities = [
    {
        value: 'Luster',
        label: 'Luster'
    },
    {
        value: 'Moderate',
        label: 'Moderate'
    },
    {
        value: 'Lower',
        label: 'Lower'
    },
  ]; 

  const Priorities = [
    {
        value: 'Low',
        label: 'Low'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'High',
        label: 'High'
    },
  ];

  const Statuss = [
    {
        value: 'Low',
        label: 'Low'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'High',
        label: 'High'
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

function ReForm() {
    const classes = useStyles();
    const [RiskType,setRiskType] = useState();
    const [InternalExternal, setInternalExternal] = useState();
    const [owner, setOwner] = useState();
    const [Severity, setSeverity] = useState();
    const [Priority, setPriority] = useState();
    const [Status,setStatus] = useState();

    const handleChange = (event) => {
        setRiskType(event.target.value);
        setInternalExternal(event.target.value);
        setOwner(event.target.value);
        setSeverity(event.target.value);
        setPriority(event.target.value);
        setStatus(event.target.value);
      };

    return(
    <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ 
        RiskType: '',
        InternalExternal : '',
        owner : '',
        Severity: '',
        Priority: '',
        Status: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 6));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form className={classes.root} onSubmit={props.handleSubmit}>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                name={RiskType}
                onChange={handleChange}
                helperText="Choose Risk Type"
                variant="outlined"
                onBlur={handleChange}>
           
                {RiskTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>

            <TextField
                className="margin"
                id="outlined-select-currency"
                select
                label="Select"
                value={InternalExternal}
                onChange={props.handleChange}
                helperText="Internal/External"
                variant="outlined">
           
                {InternalExternals.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>

            <TextField
                className="margin"
                id="outlined-select-currency"
                select
                label="Select"
                value={owner}
                onChange={handleChange}
                helperText="Choose Owner"
                variant="outlined">
           
                {owners.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>
            
            <TextField
                className="margin"
                id="outlined-select-currency"
                select
                label="Select"
                value={Severity}
                onChange={handleChange}
                helperText="Choose Severity"
                variant="outlined">
           
                {Severities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>
            <br/>

            <TextField
                className="margin"
                id="outlined-select-currency"
                select
                label="Select"
                value={Priority}
                onChange={handleChange}
                helperText="Choose Priority"
                variant="outlined">
           
                {Priorities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>

            <TextField 
            id="outlined-basic" 
            variant="outlined" 
            type="date" 
            helperText="Choose Date" 
            onChange={handleChange}/>

            <TextField 
            id="outlined-basic" 
            variant="outlined"
            label="Enter Age"
            type="number"
            helperText="Enter Age" 
            >
            </TextField>

            <TextField
                className="margin"
                id="outlined-select-currency"
                select
                label="Select"
                value={Status}
                onChange={handleChange}
                helperText="Choose Status"
                variant="outlined">
           
                {Statuss.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))} 
            </TextField>
            <br/>

          {props.errors.RiskType && <div id="feedback">{props.errors.name}</div>}
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
    )};

export default ReForm;
