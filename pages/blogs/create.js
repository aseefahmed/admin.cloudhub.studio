import React, { Fragment, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Modal,
  Row,
} from "react-bootstrap";
import PageHeader from "../../shared/layout-components/page-header/page-header";
import Link from "next/link";
import {
  Singleselectday,
  SingleselectMonth,
  Singleselectyear,
} from "../../shared/data/forms/formlayouts";
import Seo from "../../shared/layout-components/seo/seo";
const FormLayouts = () => {
  const [blog_title, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitCourse = async () => {
    const response = await fetch(
      "https://499nkl85l0.execute-api.ap-southeast-2.amazonaws.com/prod/blogs",
      {
        method: "POST",
        body: JSON.stringify({
          blog_title,
          description,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (data.errorMessage) {
      alert("ERROR Found : \n\n" + data.errorMessage);
      console.log(data);
    } else {
      alert("Operation Successful");
    }
  };
  return (
    <div>
      <Seo title="Create Blog Post" />

      <PageHeader
        title="Create Blog Post"
        item="Create Blog Posts"
        active_item="Create Blog Post"
      />
      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div className="">
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Title</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setBlogTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Description</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <textarea
                      className="form-control"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row justify-content-end mb-0">
                  <div className="col-md-8 ps-md-2 btn-list">
                    <Button
                      className="btn ripple btn-primary pd-x-30 mg-r-5"
                      onClick={submitCourse}
                    >
                      Create Course
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  );
};
FormLayouts.layout = "Contentlayout";

export default FormLayouts;
