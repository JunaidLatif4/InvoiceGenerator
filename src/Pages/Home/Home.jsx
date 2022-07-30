import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import Papa from "papaparse";

import { Button, TextField } from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AiFillFileAdd } from "react-icons/ai"

import "./Home.scss"




const Home = () => {
    const hiddenInput = useRef(null)
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        companyName: '',
        invoiceNumber: "",
        file: "",
        companyDetails: "",
        invoiceNotes: "",
        date: new Date(),
        selectedCountry: "null",
        address: "Google Commerce Limited (IRELAND)"
    })
    const [errorData, setErrorData] = useState({
        companyName: false,
        invoiceNumber: false,
        file: false,
        companyDetails: false,
        invoiceNotes: false,
        selectedCountry: false,
    })
    const [fileData, setFileData] = useState(null)
    const [countries, setCountries] = useState(null)


    const enteringData = (event) => {
        let { name, value } = event.target;
        console.log(name, value);

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
        setErrorData((preVal) => {
            return {
                ...preVal,
                [name]: value ? value.length >= 1 ? false : true : true
            }
        })
    }
    const enteringDate = (newDate) => {
        setEnteredData((preVal) => {
            return {
                ...preVal,
                date: newDate
            }
        })
    }
    const clickUpload = () => {
        hiddenInput.current.click()
    }
    const uploadFile = (event) => {
        console.log(event.target.files[0])
        setEnteredData((preVal) => {
            return {
                ...preVal,
                file: event.target.files[0]
            }
        })
        setErrorData((preVal) => {
            return {
                ...preVal,
                file: false
            }
        })
    }


    const handleParse = () => {
        const reader = new FileReader();
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            setFileData(csv.data);
        };
        reader.readAsText(enteredData.file);
    };

    const genertingResult = () => {

        if (!enteredData.companyName || !enteredData.invoiceNumber || !enteredData.file || !enteredData.companyDetails || !enteredData.invoiceNotes || enteredData.selectedCountry == "null") {
            Object.keys(enteredData).map((key, index) => {
                if (!enteredData[key] || enteredData[key] == "null") {
                    setErrorData((preVal) => {
                        return {
                            ...preVal,
                            [key]: true
                        }
                    })
                }
            })
        } else {
            history.push({ pathname: "/invoice", state: { enteredData, fileData } })
        }

    }

    useEffect(() => {
        if (enteredData.file) {
            handleParse()
        }
    }, [enteredData])
    useEffect(() => {
        if (fileData) {
            let allCountries = []
            fileData.map((data) => {
                if (data["Buyer Country"] && allCountries.indexOf(data["Buyer Country"]) == -1) {
                    console.log("kkkk", data);
                    allCountries.push(data["Buyer Country"])
                }
            })
            setCountries(allCountries)
        }
    }, [fileData])

    console.log("----CSV----", fileData);
    return (
        <>
            <div className="home_container">
                <div className="heading">
                    Invoice<span>Generator</span>
                </div>
                <div className="form">
                    <div className="line">
                        <TextField
                            id="filled-required"
                            label="Company Name"
                            variant="filled"
                            fullWidth
                            name="companyName"
                            onChange={enteringData}
                            error={errorData.companyName}
                            helperText={errorData.companyName && "This Field is Requried"}
                        />
                        <TextField
                            id="filled-required"
                            label="Invoice Number"
                            variant="filled"
                            fullWidth
                            name='invoiceNumber'
                            onChange={enteringData}
                            error={errorData.invoiceNumber}
                            helperText={errorData.invoiceNumber && "This Field is Requried"}
                        />

                    </div>
                    <div className="line">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Payment Date"
                                inputFormat="MM/dd/yyyy"
                                value={enteredData.date}
                                onChange={enteringDate}
                                renderInput={(params) => <TextField {...params} variant="filled" fullWidth />}
                            />
                        </LocalizationProvider>
                        <FormControl fullWidth variant="filled">
                            <InputLabel>Earnings File</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                disabled={countries ? false : true}
                                defaultValue="null"
                                value={enteredData.selectedCountry}
                                error={errorData.file || errorData.selectedCountry ? true : false}
                                onChange={enteringData}
                                name="selectedCountry"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={clickUpload}
                                            edge="end"
                                        >
                                            <AiFillFileAdd color={countries ? "green" : null} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            >
                                <MenuItem value="null">NONE</MenuItem>
                                {
                                    countries && countries.map((data) => {
                                        console.log(data);
                                        return (
                                            <MenuItem value={data}>{data}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                            {/* <FilledInput
                                disabled
                                error={errorData.file}
                                helperText={errorData.file && "This Field is Requried"}
                                defaultValue={"AddFile"}
                                value={enteredData.file?.name}
                                id="filled-adornment-password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={clickUpload}
                                            edge="end"
                                        >
                                            <AiFillFileAdd />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            /> */}
                        </FormControl>
                        <div className="fileinput" style={{ display: "none" }}>
                            <input ref={hiddenInput} type="file" onChange={uploadFile} />
                        </div>
                    </div>
                    <div className="line">
                        <FormControl fullWidth variant="filled">
                            <InputLabel>Partner Address</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={enteredData.address}
                                onChange={enteringData}
                                name="address"
                            >
                                <MenuItem value="Google Commerce Limited (IRELAND)">Google Commerce Limited (IRELAND)</MenuItem>
                                <MenuItem value="Google Inc. (US/Americas)">Google Inc. (US/Americas)</MenuItem>
                                <MenuItem value="Google Asia Pacific Pte. Ltd. (Asia)">Google Asia Pacific Pte. Ltd. (Asia)</MenuItem>
                            </Select>
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
                            name='companyDetails'
                            onChange={enteringData}
                            error={errorData.companyDetails}
                            helperText={errorData.companyDetails && "This Field is Requried"}
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Invoice Notes"
                            multiline
                            rows={4}
                            variant="filled"
                            fullWidth
                            name='invoiceNotes'
                            onChange={enteringData}
                            error={errorData.invoiceNotes}
                            helperText={errorData.invoiceNotes && "This Field is Requried"}
                        />
                    </div>
                    <div className="line">
                        <Button fullWidth size='large' className='btn' onClick={genertingResult}> GENERATE </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home