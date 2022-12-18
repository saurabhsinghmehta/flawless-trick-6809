import { Box, Button, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit, getdata } from "../Redux/ProductMgt/action";
import styles from "../CSS/editPage.css";
import { getData } from "../Redux/Sorting/actiontype";

const Edit = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.Sortingreducer.data;
  });
  const { id } = useParams();
  const data = products.filter((i) => i.id === +id);
  console.log(id, data, products);
  const [product, setProduct] = useState({
    id: data[0].id,
    image: data[0].image,
    title: data[0].title,
    category: data[0].category,
    available: true,
    price: data[0].price,
    detail: data[0].detail,
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(id, product)).then(() =>{
      dispatch(getData());
    });
    navigate("/admin");
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Box>
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
              name="category"
              value={product.category}
              onChange={(event) =>
                setProduct({ ...product, category: event.target.value })
              }
            >
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
    </Box>
  );
};

export default Edit;
