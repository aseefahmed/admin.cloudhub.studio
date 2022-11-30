import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import IntlTelInput from "react-intl-tel-input";
import * as formelement from "../../../shared/data/forms/formelement"
import * as forms from "../../../shared/data/forms/advanceforms"
import Seo from '../../../shared/layout-components/seo/seo';

const AdvancedForms = () => {
  return (
    <div>
      <Seo title="Advanced Forms"/>

      <PageHeader title="Advanced Forms" item="Forms" active_item="Advanced Forms"/>
      <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Telephone Input</h6>
              <p className="text-muted card-sub-title">
                A plugin for entering and validating international telephone
                numbers. It adds a flag dropdown to any input, detects the
                {`user's `}country, displays a relevant placeholder and provides
                formatting/validation methods.
              </p>
            </div>
            <InputGroup className="telephone-input">
              <IntlTelInput
                containerClassName="intl-tel-input"
                inputClassName="form-control"
              />
              <span className="input-group-btn">
                <Button
                  variant="" className="btn ripple btn-primary" type="button">
                  Submit
                </Button>
              </span>
            </InputGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Select2</h6>
              <p className="text-muted card-sub-title">
                Select2 gives you a customizable select box with support for
                searching, tagging, remote data sets, infinite scrolling, and
                many other highly used options.
              </p>
            </div>
            <Row className="row-sm mg-b-20">
              <Col lg={4} className="">
                <p className="mg-b-10">Single Select</p>
                <forms.Singleselect />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select with Search</p>
                <forms.MultipleSelect22 />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Single Select (Disabled)</p>
                <forms.Disabledselect />
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={4}>
                <p className="mg-b-10">Multiple Select</p>
                <forms.AnimatedMulti />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select with Pre-Filled Input</p>
                <forms.Prefilledinputs />
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multiple Select (Disabled)</p>
                <forms.Disabledselect />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Date Range Picker</h6>
              <p className="text-muted card-sub-title">Date Range Picker</p>
            </div>
            <Row className="row-sm">
              <Col lg={12}>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fe fe-calendar  lh--9 op-6"></i>
                  </InputGroup.Text>
                  <formelement.Previousmonth />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">File Upload</h6>
              <p className="text-muted">
                Dropify is a react dropzone plugin to create a beautiful file
                uploader that converts a standard <code>input {`type="file"`}</code>
                into a nice drag & drop zone with previews and custom styles.
              </p>
            </div>
            <Row className="mb-4">
              <Col sm={12} md={4} className="mg-t-10">

                <forms.Materialui />
              </Col>
              <Col sm={12} md={4} className="mg-t-10">

                <forms.CustomMaterialui />

              </Col>
              <Col sm={12} md={4} className="mg-t-10">
                {/* <forms.MUIdropzonebadge /> */}
                <forms.StyledDropzone1 />

              </Col>
              <Col sm={12} md={4} className="mg-t-10">

                <forms.MUIdropzonebutton />
              </Col>
              {/* <Col sm={12} md={4} className="mg-t-10">

                <forms.StyledDropzone1 />
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      </div>
  )
}
AdvancedForms.layout = "Contentlayout"

export default AdvancedForms