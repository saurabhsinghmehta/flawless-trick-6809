import { Box, Input, Select, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../CSS/ProductMgtStyles.css";
import { useDispatch } from "react-redux";
import { addNewData } from "../Redux/ProductMgt/action.js";
import { getData } from "../Redux/Sorting/actiontype";

function ProductManagement() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    category: "",
    option: "",
    available: true,
    price: 0,
    detail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewData(product)).then(() => dispatch(getData()));
    setProduct({image: "",
    title: "",
    category: "",
    option: "",
    available: true,
    price: 0,
    detail: "",})
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

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
              value={product.title}
              className={styles.form_Input}
              onChange={(event) =>
                setProduct({ ...product, title: event.target.value })
              }
            />
          </div>

          <div>
            <Select
              name="option"
              value={product.option}
              onChange={(event) =>
                setProduct({ ...product, option: event.target.value })
              }
            >
              <option value="">Select option</option>
              <option value="Chicken">Chicken</option>
              <option value="Biryani">Biryani</option>
              <option value="exclusivedeal">exclusivedeal</option>
              <option value="newlaunch">newlaunch</option>
              <option value="boxmeal">boxmeal</option>
              <option value="burger">burger</option>
              <option value="snacks">snacks</option>
              <option value="stayhomespecial">stayhomespecial</option>
              <option value="beverages">beverages</option>
            </Select>
          </div>
          <div>
            <Select
              name="category"
              value={product.category}
              onChange={(event) =>
                setProduct({ ...product, category: event.target.value })
              }
            >
              <option value="">Select Category</option>
              <option value="veg">veg</option>
              <option value="non-veg">non-veg</option>
            </Select>
          </div>
          <div>
            <Input
              type="URL"
              placeholder="Image URL"
              value={product.image}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, image: event.target.value })
              }
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="text"
              value={product.detail}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, detail: event.target.value })
              }
              placeholder="description"
            />
          </div>
          <div className={styles.form_element_div}>
            <Input
              type="number"
              value={product.price}
              name={""}
              onChange={(event) =>
                setProduct({ ...product, price: event.target.value })
              }
              placeholder="price"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={(e) => handleSubmit(e)}>Add Product</Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ProductManagement;
