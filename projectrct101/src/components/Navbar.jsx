import {Box,Stack,HStack,Center,Text,Heading,Spacer, Divider,Image,Input, InputGroup, InputLeftElement, } from '@chakra-ui/react'

import { Link } from 'react-router-dom';
import { Search2Icon } from "@chakra-ui/icons";
import logo from '../Images/shopping-cart.png';
import acount from '../Images/account.png';

import location from '../Images/location.png'
import LoginDrawer from './LoginDrower';




function Navbar({handleSearchChange,searchQuery}){
 
 
    return <Box >
      <Center bg="#004e80" color="white" h="48px">
       SPRING FISHING CLASSIC   |  Shop Now >
       </Center>
      <Box position="sticky" top={0} bg="white">
       
       
       <HStack cursor={"pointer"} fontWeight={"600"}  m="10px">
       <Spacer/>
       
        <Image src={location} width="22px"/><Text>My Store : </Text><Text color="blue">Find Store</Text>
       
        <Text color="brown">FREE Shipping</Text> <Text>On Order $50+</Text>
        <Spacer/>
        <Text  >Boat Offroad restaurant&resort Outdoor Tips CLUB GIft Card Help</Text>
        <Spacer/>
       </HStack>
       <Divider/>
       <HStack width="92%" m="auto">
        <Spacer/>
       <Link to="/"> <Image width="100px" src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png"/></Link>
      
<InputGroup size="lg">
  <InputLeftElement
    pointerEvents="none"
    color="gray.300"
    fontSize="1.1em"
    children={<Search2Icon color="black" />}
  />
  <Input
    type="text"
    placeholder="What can we help you find?..."
    borderRadius="full"
    boxShadow="md"
    
    bg="rgb(229,229,229)"
    
    value={searchQuery}
    onChange={handleSearchChange}
    
    _focus={{ boxShadow: "outline" }}
  />
</InputGroup>
        <LoginDrawer/>
        
        <Link to="/cart"><Image src={logo} width="40px"/></Link>
        
       </HStack>
       <Divider/>
       <Center>
        
       <Stack direction={[]} gap="40px" fontWeight="50" p="10px" cursor={"pointer"} >
        
      
      <Link to="/product"><Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Fishing</Heading></Link>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Boating</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Shooting</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Hunting</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Camping</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Clothing</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Footwear</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Outdoor rec</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Home & Gift</Heading>
        <Heading size="md" fontWeight="400" style={{fontFamily: "Arial, sans-serif",}} >Burgain cave</Heading>
       
       </Stack>
       </Center>
       <Divider/>
       </Box>
      
    </Box>
}
export default Navbar