import { Box, Input, Select, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../CSS/ProductMgtStyles.css";
function ProductManagement() {
  //handling the input value
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [dis, setDis] = useState("");
  const [price, setPrice] = useState();

  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const handleCategory = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };
  const handleImg = (event) => {
    event.preventDefault();
    setImg(event.target.value);
  };
  const handleDis = (event) => {
    event.preventDefault();
    setDis(event.target.value);
  };
  const handlePrice = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };
  return (
    <>
      {" "}
      <h1>Product Management</h1>
      <Box w="100%" display={{ md: "flex" }} justifyContent="space-around">
        <Box W="50%">
          <div className={styles.form_element_div}>
            <Input
              placeholder="title"
              type="text"
              name={""}
              value={title}
              className={styles.form_Input}
              onChange={(event) => handleTitle(event)}
            />
          </div>
          <div>
            <Select name="category" value={category} onChange={handleCategory}>
              <option value="">Select Category</option>
              <option value="Biryani">Biryani</option>
              <option value="Burger">Burger</option>
              <option value="exclusivedeal">exclusivedeal</option>
              <option value="boxmeal">boxmeal </option>
              <option value="snacks">snacks </option>
              <option value="stayhomespecial">stayhomespecial </option>
              <option value="beverages">beverages </option>
            </Select>
          </div>
          <div>
            <Input
              type="URL"
              placeholder="Image URL"
              value={img}
              name={""}
              onChange={(event) => handleImg(event)}
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={dis}
              name={""}
              onChange={(event) => handleDis(event)}
              placeholder="description"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={price}
              name={""}
              onChange={(event) => handlePrice(event)}
              placeholder="price"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={""}>Add Product</Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ProductManagement;
