import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SingleProductPage from "./SingleProductPage";

function Cart({ cartItems, clearCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={4}>
        Cart
      </Text>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <Box key={index} mb={4}>
              <Text>{item.heading}</Text>
              <Text>{item.description}</Text>
              <Text>Size: {item.size}</Text>
              <Text>Price: ${item.price}</Text>
            </Box>
          ))}
          <Box mt={8}>
            <Text>Total Price: ${totalPrice}</Text>
            <Button colorScheme="red" onClick={clearCart} mt={4}>
              Clear Cart
            </Button>
          </Box>
        </>
      ) : (
        <Text>No items in cart.</Text>
      )}
      <Link to="/">
        <Button colorScheme="green" mt={8}>
          Continue Shopping
        </Button>
      </Link>
    </Box>
  );
}

export default Cart;
