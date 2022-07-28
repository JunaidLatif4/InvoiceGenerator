import { useRef, useState, useEffect } from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import 'hammerjs';

import InvoImg from "./in.png"

import './InvoiceTemplate.scss';



const InvoiceTemplate = () => {
	const pdfExportComponent = useRef(null);

	const handleExportWithComponent = (event) => {
		pdfExportComponent.current.save();
	}

	return (
		<div id="example">
			<div className="box wide hidden-on-narrow">
				<div className="box-col">
					<h4>Export PDF</h4>
					<Button primary={true} onClick={handleExportWithComponent}>Export</Button>
				</div>
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
								<span className="invoice-number">#23543</span>
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
											Antonio Moreno<br />
											Naucalpan de Juárez<br />
											México D.F., Mexico, 53500
										</p>
										<p>
											Invoice ID: 23543<br />
											Invoice Date: 12.03.2014<br />
											Due Date: 27.03.2014
										</p>
									</div>

								</div>
							</div>
							<div class="table" style={{ marginTop: "1rem" }}>
								<div className='table_box'>
									<div class="table-header">
										<div class="header__item">Sales In EU</div>
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
	);
}

export default InvoiceTemplate;