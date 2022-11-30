import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import C3Charts from 'react-c3js';
import * as c3piecharts from '../../../shared/data/chart/c3piechart'
import { Card, Col, Row } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';

const Piacharts = () => {
  return (
    <div>
        <Seo title="piacharts"/>

      <PageHeader title="piacharts" item="Charts" active_item="piacharts"/>
      
      {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <C3Charts
              id="chart-pie2"
              className="chartsh"
              data={c3piecharts.Piechart3.data}
              columns={c3piecharts.Piechart3.pie}
            />

          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart2</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic area chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisArea2">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart2.data}
                columns={c3piecharts.Piechart2.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart3</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine1">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart3.data}
                columns={c3piecharts.Piechart3.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="custom-card">
          <Card.Header>
            <h6 className="main-content-label mb-1">Pia Chart4</h6>
            <p className="text-muted  card-sub-title">
              Below is the basic line chart example.
            </p>
          </Card.Header>
          <Card.Body>
            <div className="" id="morrisLine2">
              <C3Charts
                id="chart-pie2"
                className="chartsh"
                data={c3piecharts.Piechart.data}
                columns={c3piecharts.Piechart.pie}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      </div>
  )
}
Piacharts.layout = "Contentlayout"

export default Piacharts