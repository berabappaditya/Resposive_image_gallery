import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ImageStock.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaDownload, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ImageStock({ setSelectedImage }) {
  // let [like, setLike] = useState(0);
  const [dataRender, updateDataRender] = useState([]);

  // function handleLike() {
  //   setLike(like + 1);
  // }

  function renderData(responseData) {
    const dataArray = responseData.map((imageData) => {
      console.log(typeof setSelectedImage);

      return (
        <Col md={4} mt={2} className="imgCol" key={imageData.id}>
          <motion.div
            className="imgCard"
            whileHover={{
              opacity: 1,
              scale: 1.02,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <img
              className="imgs"
              src={imageData.download_url}
              alt={imageData.author}
              onClick={() => setSelectedImage(imageData.download_url)}
            />
            <div className="cardCon" style={{ color: "white" }}>
              <div className="like-box">
                <FaHeart />
              </div>
              <p style={{ color: "white", margin: "0" }}>
                Image By: {imageData.author}
              </p>

              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `${imageData.download_url}`,
                }}
                target="_blank"
              >
                <div style={{ color: "white" }}>
                  <FaDownload />
                </div>
              </Link>
            </div>
          </motion.div>
        </Col>
      );
    });
    updateDataRender(dataArray);
  }

  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    renderData(response.data);
    console.log("response.data");
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ background: "#231F20" }}>
      <Container fluid>
        <Row md>{dataRender}</Row>
      </Container>
    </div>
  );
}
