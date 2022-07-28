import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import 'hammerjs';

import InvoImg from "./in.png"

import './InvoiceTemplate.scss';



const InvoiceTemplate = () => {
    const pdfExportComponent = useRef(null);
    let history = useHistory()

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    const [enteredData, setEnteredData] = useState(null)
    const [fileData, setFileData] = useState(null)

    let today = new Date()

    useEffect(() => {
        let enteredData = history.location.state.enteredData
        let fileData = history.location.state.fileData
        if (enteredData && fileData) {
            setEnteredData(enteredData)
            setFileData(fileData)
        } else {
            history.push("/")
        }

    }, [])


    return (
        enteredData && fileData &&
        <>
            <div className='invoice-template_container'>
                    <div className="export_btn">
                        <Button className='btn' onClick={handleExportWithComponent}>Export</Button>
                    </div>
                <div className="page-container hidden-on-narrow">
                    <PDFExport ref={pdfExportComponent}>
                        <div className={`pdf-page size-a4`}>
                            <div className="inner-page">
                                <div className="pdf-header">
                                    <span className="company-logo">
                                        {/* <InvoSvg/> Blauer See Delikatessen */}
                                        <img src={InvoImg} alt="Kendoka Company Logo" /> Invoice
                                    </span>
                                    <span className="invoice-number">#{enteredData.invoiceNumber}</span>
                                </div>
                                <div className="pdf-footer">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi recusandae molestiae sunt quo omnis nisi cupiditate nobis quos
                                    </p>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi provident culpa, inventore
                                    </p>
                                </div>
                                <div className="addresses">
                                    <div className="for">
                                        <h3>Invoice For</h3>
                                        <div className="f_data">
                                            <p>
                                                {enteredData.companyName}
                                            </p>
                                            <p>
                                                Invoice ID: {enteredData.invoiceNumber}<br />
                                                Invoice Date: {`0${today.getDate()}`.slice(-2)}.{`0${today.getMonth() + 1}`.slice(-2)}.{`${today.getFullYear()}`}<br />
                                                Due Date: {`0${enteredData.date.getDate()}`.slice(-2)}.{`0${enteredData.date.getMonth() + 1}`.slice(-2)}.{`${enteredData.date.getFullYear()}`}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="table" style={{ marginTop: "1rem" }}>
                                    <div className='table_box'>
                                        <div class="table-header">
                                            <div class="header__item">Sales In <span style={{ color: "black", fontStyle: "italic" }}> {enteredData.selectedCountry} </span></div>
                                            <div class="header__item"></div>
                                        </div>
                                        <div class="table-content">
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Units Sold </div>
                                                <div class="table-data2">2</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Sales</div>
                                                <div class="table-data2">1</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Withheld</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Google Fees</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Paid to Supplier </div>
                                                <div class="table-data2">0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='table_box'>
                                        <div class="table-header">
                                            <div class="header__item">Sales In rest of world</div>
                                            <div class="header__item"></div>
                                        </div>
                                        <div class="table-content">
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Units Sold </div>
                                                <div class="table-data2">2</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Sales</div>
                                                <div class="table-data2">1</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Withheld</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Google Fees</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Paid to Supplier </div>
                                                <div class="table-data2">0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table" style={{ marginTop: ".5rem" }}>
                                    <div className='table_box'>
                                        <div class="table-header">
                                            <div class="header__item">Total Sales</div>
                                            <div class="header__item"></div>
                                        </div>
                                        <div class="table-content">
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Units Sold </div>
                                                <div class="table-data2">2</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Mobile App Sales</div>
                                                <div class="table-data2">1</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Withheld</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Tax Refunds</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Google Fees</div>
                                                <div class="table-data2">0</div>
                                            </div>
                                            <div class="table-row">
                                                <div class="table-data">Paid to Supplier </div>
                                                <div class="table-data2">0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PDFExport>
                </div>
            </div>
        </>
    );
}

export default InvoiceTemplate;