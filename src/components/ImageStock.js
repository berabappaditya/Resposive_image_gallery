import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ImageStock.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion'

export default function ImageStock({ setSelectedImage }) {
  const [dataRender, updateDataRender] = useState([]);
  function renderData(responseData) {
    
    const dataArray = responseData.map((imageData) => {
      console.log(typeof setSelectedImage);
         
      return (
        <Col
          md={4}
          mt={2}
          className="imgCol"
          onClick={() => setSelectedImage(imageData.download_url)}
          key={imageData.id}
        >
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
            />
            <div className="cardCon">Image By: {imageData.author}</div>
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
    <div>
      <Container fluid>
        <Row md>{dataRender}</Row>
      </Container>
    </div>
  );
}