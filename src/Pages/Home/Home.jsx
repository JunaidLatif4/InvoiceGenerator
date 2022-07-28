import React, { useState } from 'react'

import { TextField } from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import {AiFillFileAdd} from "react-icons/ai"

import "./Home.scss"




const Home = () => {

    const [enterdData, setEnteredData] = useState({
        date: new Date().toLocaleDateString()
    })

    const uploadFile = ()=>{

    }

    return (
        <>
            <div className="home_container">
                <div className="heading">
                    Invoice <span>Generator</span>
                </div>
                <div className="form">
                    <div className="line">
                        <TextField
                            id="filled-required"
                            label="Company Name"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="filled-required"
                            label="Invoice Number"
                            variant="filled"
                            fullWidth
                        />

                    </div>
                    <div className="line">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Payment Date"
                                inputFormat="MM/dd/yyyy"
                                value={enterdData.date}
                                //   onChange={handleChange}
                                renderInput={(params) => <TextField {...params} variant="filled" fullWidth />}
                            />
                        </LocalizationProvider>
                        <FormControl fullWidth variant="filled">
                            <InputLabel>Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                // value={values.password}
                                // onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={uploadFile}
                                            edge="end"
                                        >
                                             <AiFillFileAdd />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                    </div>
                    <div className="line">
                        <TextField
                            id="filled-multiline-static"
                            label="Company Details"
                            multiline
                            rows={4}
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Invoice Notes"
                            multiline
                            rows={4}
                            variant="filled"
                            fullWidth
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home