// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0)

  //state to store whether input  filed value are valid
  const [isPrincipleValid, setIsPrincipleValid] = useState(true)
  const [isRateValid, setIsRateValid] = useState(true)
  const [isYearValid, setIsYearValid] = useState(true)

  const validate = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    if (!!value.match(/^[1-9][0-9]*\.?[0-9]*$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrincipleValid(true)
      }
      else if (name === 'interestRate') {
        setRate(value)
        setIsRateValid(true)
      }
      else {
        if (value>0){

        }
        setYear(value)
        setIsYearValid(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrincipleValid(false)
      }
      else if (name === 'interestRate') {
        setRate(value)
        setIsRateValid(false)
      }
      else {
        setYear(value)
        setIsYearValid(false)
      }
    }
  }


  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("Principle Amount Entered", principle)
    console.log("Interest Rate Entered", rate)
    console.log("Total Year Entered", year)
    const result = ((principle * rate * year) / 100)
    setInterest(result)
  }
  const resetValues = () => {
    setInterest(0);
    setYear(0);
    setPrinciple(0);
    setRate(0)
  }
  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh' }} className='d-flex justify-content-center align-items-center' >
        <div style={{ backgroundColor: "white", width: '500px' }} className='p-5 rounded'>
          <h2>Simple Interest Application</h2>
          <p>
            Calculate Your Simple Interest Easily
          </p>
          <div style={{ height: '150px', backgroundColor: 'orange' }} className='p-3 mt-3 rounded shadow d-flex justify-content-center align-items-center flex-column'>
            <h2 className='fw-bold'>&#x20B9; {interest}</h2>
            <p>Total Simple Interest</p>
          </div>
          <form onSubmit={handleCalculate}>
            <div className='mt-3'>
              <TextField id="outlined-basic" label="Principle Account" variant="outlined" className="w-100" name='principle' onChange={(e) => validate(e)} value={principle || ""}
              />
              {
                !isPrincipleValid &&
                <p className='text-danger'>Input Valid</p>
              }
            </div>
            <div className='mt-3'>
              <TextField id="outlined-basic" label="Rate of Interest in %" variant="outlined" className="w-100" name='interestRate' onChange={(e) => validate(e)} value={rate || ""}
              />
              {
                !isRateValid &&
                <p className='text-danger'>Input Valid</p>
              }
            </div>
            <div className='mt-3'>
              <TextField id="outlined-basic" label="Total Interest" variant="outlined" className="w-100" name='totalYear' onChange={(e) => validate(e)} value={year || ""}
              />
              {
                !isYearValid &&
                <p className='text-danger'>Input Valid</p>
              }
            </div>
            <div className='mt-3 d-flex justify-content-between'>
              <Button type='submit' variant="contained" color="success" style={{ width: '190px', padding: '10px' }}>
                CALCULATE
              </Button>
              <Button onClick={resetValues} variant="outlined" style={{ width: '190px', padding: '10px' }} >RESET</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
