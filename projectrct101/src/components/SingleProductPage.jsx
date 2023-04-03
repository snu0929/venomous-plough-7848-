import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Heading,
  Text,
  Image,
  Box,
  Button,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  function addToCart() {
    const itemToAdd = { ...product, size: selectedSize };
    setCartItems([...cartItems, itemToAdd]);
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    
    <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} gap={10}>
      <Box>
        <Image src={product.image} alt={product.title} width="90%" p={8} />
      </Box>
      <Box>
        <Heading>{product.heading}</Heading>
        <Text>{product.description}</Text>
        <Text>Price: ${product.price}</Text>

        <Text>
          Rating: {product.rating} stars ({product.rating} ratings)
        </Text>
        <Select
          placeholder="Select Length"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </Select>
        <Button
          colorScheme="blue"
          isDisabled={!selectedSize}
          onClick={addToCart}
        >
          Add to Cart
        </Button>
        <Link to="/cart">
          <Button colorScheme="green">View Cart</Button>
        </Link>
      </Box>
      <Cart cartItems={cartItems} />
    </Grid>
    <Footer/>
    </>
    
  );
}

export default SingleProductPage;
