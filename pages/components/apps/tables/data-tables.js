import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { BasicDatatable, DataTables, ExportCSV, Hoverdatatable, } from "../../../../shared/data/table/data-tables";
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import Seo from '../../../../shared/layout-components/seo/seo';

const DataTable = () => {
  return (
    <>
    <Seo title="Data Tables"/>

    <PageHeader title="DataTable" item="Maps & Tables" active_item="DataTable"/>

	<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">BasicData</h6>
							<p className="text-muted card-sub-title">
								A simple example with no frills.
							</p>
						</div>
						<div className="responsive">
							<BasicDatatable />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card overflow-hidden">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">datatable</h6>
							<p className="text-muted card-sub-title">
								A simple example with no frills.
							</p>
						</div>
						<div className="responsive">
							<Hoverdatatable />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">
								Custom pagination actions
							</h6>
							<p className="text-muted card-sub-title">
								Custom pagination actions is an extension for DataTables.
							</p>
						</div>

						<div className="table-responsive">
							<ExportCSV />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		<Row className="row-sm">
			<Col lg={12}>
				<Card className="custom-card">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">
								Custom pagination actions
							</h6>
							<p className="text-muted card-sub-title">

							</p>
						</div>

						<div className="table-responsive">
							<DataTables />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
    </>
  )
}
DataTable.layout = "Contentlayout"

export default DataTable