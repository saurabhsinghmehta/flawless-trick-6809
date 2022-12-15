import { Box, Input, Select, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../CSS/ProductMgtStyles.css";
function ProductManagement() {
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
              value={""}
              className={styles.form_Input}
              onChange={""}
            />
          </div>
          <div>
            <Select name="category" onChange={""}>
              <option value="">Select Category</option>
              <option value="pune">Biryani</option>
              <option value="delhi">Burger</option>
              <option value="goa">exclusivedeal</option>
              <option value="mumbai">boxmeal </option>
              <option value="mumbai">snacks </option>
              <option value="mumbai">stayhomespecial </option>
              <option value="mumbai">beverages </option>
            </Select>
          </div>
          <div>
            <Input
              type="url"
              placeholder="Image URL"
              value={""}
              name={""}
              onChange={""}
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={""}
              name={""}
              onChange={""}
              placeholder="description"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={""}
              name={""}
              onChange={""}
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
