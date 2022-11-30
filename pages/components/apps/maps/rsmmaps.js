import React, { useState } from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import {Card, Col, Row, Button } from "react-bootstrap";
import * as rsmmapsdata from "../../../../shared/data/maps/rsmmap"
import Seo from '../../../../shared/layout-components/seo/seo';
const Rsmmaps = () => {
	const [content, setContent] = useState("");
  return (
    <>
        <Seo title="Rsmmaps Maps"/>

    <PageHeader title="rsmmaps" item="Apps" active_item="rsmmaps"/>

     {/* <!-- Row --> */}
	 <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM maps</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the world map.
                </p>
              </div>
              <div className="ht-300 ht-lg-400" id="vmap">
                <rsmmapsdata.MapChart setTooltipContent={setContent} />
                {content}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Basic markers</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the South America map.
                </p>
              </div>
              <div className="ht-300" id="vmap3 ">
                <rsmmapsdata.Basicmarkers />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Coustommarkers</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the usa map.
                </p>
              </div>
              <div className="ht-300" id="vmap2">
                <rsmmapsdata.Custommarkers />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Line Map</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the Line map.
                </p>
              </div>
              <div className="ht-300 text-center" id="vmap3 ">
                <rsmmapsdata.Linemap />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">RSM:Graticule</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of displaying the Graticule map.
                </p>
              </div>
              <div className="ht-300" id="vmap2">
                <rsmmapsdata.Graticule1 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </>
  )
}
Rsmmaps.layout = "Contentlayout"

export default Rsmmaps