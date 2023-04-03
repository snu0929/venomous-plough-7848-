import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
  IconButton,
  Button,
  Stack,
  Center,
  SimpleGrid,

} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import { Link  } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Filter from './Filter';


function ProductPage() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState('lowToHigh');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);
  const [SearchProducts, setSearchProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  


  

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
      setSortedProducts(response.data);
      
      // Extract all brands from the products
      const allBrands = [...new Set(response.data.map((product) => product.brand))];
      setBrands(allBrands);
    } catch (error) {
      console.error(error);
    }
  };

  fetchProducts();
}, []);


 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
        setSortedProducts(response.data);
        
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
 

  useEffect(() => {
    const sortProducts = (type) => {
      const sorted = [...products].sort((a, b) => {
        if (type === 'lowToHigh') {
          return a.price - b.price;
        } else if (type === 'highToLow') {
          return b.price - a.price;
        }
        return products
      });
      setSortedProducts(sorted);
    };

    sortProducts(sortType);
  }, [sortType, products]);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.heading.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchProducts(filtered);
  }, [searchQuery, products]);

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handlePrevPageClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPageClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageNumbers = [];
  const filteredProducts = selectedBrand ? sortedProducts.filter((product) => product.brand === selectedBrand) : sortedProducts;
  const matchedProducts = filteredProducts.filter(product => {
    return SearchProducts.includes(product);
  });
  
  // slice the matchedProducts array to get the current products to display
  const currentProducts = matchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);



  // const filteredProducts = selectedBrand ? sortedProducts.filter((product) => product.brand === selectedBrand) : sortedProducts;
  // const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const renderPageNumbers = pageNumbers.map((number) => (
    <Button key={number} id={number} onClick={handleClick} variant={currentPage === number ? 'solid' : 'ghost'} border="1px solid black">
      {number}
    </Button>
  ));
   const handleSearchChange=(e)=>{
      setSearchQuery(e.target.value)
      console.log(searchQuery)
   }

  return (
    <>
    <Navbar handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>
    <SimpleGrid templateColumns="20% 75%" gap={15} mt={5} ml={5}>
    <Box bg="gray.300" p={3}>
     <Filter brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
     </Box>
     
     <Box bg="gray.100">
      <Box mb={6} bg="teal" p={4}>
        <Text color="white">Sort by:</Text>
        <select onChange={handleSortChange} defaultValue="lowToHigh" >
          
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </Box>
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
        {currentProducts.map((product) => (
          <GridItem key={product.id} bg="gray.200">
            
            <Link  to={`/products/${product.id}`}> <Box borderWidth="1px" borderRadius="lg" overflow="hidden"height={350} pt={5}  transition="transform 0.2s"
      _hover={{ transform: "scale(1.1)" }}>
                
              <Box h="150px"><Center><Image src={product.image} alt={product.brand} /></Center></Box>
              <Center>
              <Box p={3} >
                
                <Heading as="h2" size="md" mb={2}>
                  {product.brand}
                </Heading>
                <Stack direction="row" align="center" mb={2}>
                  <StarIcon color="yellow.500" />
                  <Text fontSize="sm">{product.rating}/5</Text>
                </Stack>
                <Text mb={2}>{product.heading}</Text>
                <Text fontWeight="bold">${product.price}</Text>
               
              </Box> </Center>
            </Box></Link>
           
          </GridItem>
        ))}
      </Grid>
      <Box my={6} display="flex" justifyContent="center" bg="green.100" gap={4}>
        <IconButton
          mr={2}
          onClick={handlePrevPageClick}
          isDisabled={currentPage === 1}
          icon={<ChevronLeftIcon />}
          aria-label="previous page"
          border={"1px solid black"}
        />
        {renderPageNumbers}
        <IconButton
          ml={2}
          onClick={handleNextPageClick}
          isDisabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)}
          icon={<ChevronRightIcon />}
          aria-label="next page"
          border={"1px solid black"}
        />
      </Box>
      </Box>
    </SimpleGrid>
    <Footer/>
    </>
  );
}

export default ProductPage;

