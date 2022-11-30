import React from "react";
import PageHeader from "../../shared/layout-components/page-header/page-header";
import Link from "next/link";
import {
  BasicDatatable,
  DataTables,
  ExportCSV,
  Hoverdatatable,
} from "../../shared/data/table/data-tables";
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import Seo from "../../shared/layout-components/seo/seo";

const DataTable = () => {
  return (
    <>
      <Seo title="Courses" />

      <PageHeader title="Courses" item="Home" active_item="Courses" />

      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div className="responsive">
                <div className="d-flex">
                  <div className="justify-content-center">
                    <Link href="/courses/create">
                      <button
                        type="button"
                        className="btn btn-primary my-2 btn-icon-text"
                      >
                        <i className="fe fe-plus me-2"></i> Create Course
                      </button>
                    </Link>
                  </div>
                </div>
                <Hoverdatatable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
DataTable.layout = "Contentlayout";

export default DataTable;
