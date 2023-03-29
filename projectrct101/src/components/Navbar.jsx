import {Box,Stack,HStack,VStack,Center,Container,Text,Heading,Spacer, Divider,Image,Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import logo from '../Images/shopping-cart.png';
import acount from '../Images/account.png';
import search from '../Images/magnifying-glass.png';
import location from '../Images/location.png'

function Navbar(){
 
    return <Box position="sticky" top={0}>
       <Center bg="#004e80" color="white" h="48px">
       SPRING FISHING CLASSIC   |  Shop Now >
       </Center>
       
       <HStack cursor={"pointer"} fontWeight={"600"} m="10px">
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
        <Image width="100px" src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png"/>
      
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
    
    _focus={{ boxShadow: "outline" }}
  />
</InputGroup>
        <Image src={acount} width ="40px"/>
        <Image src={logo} width="40px"/>
        
       </HStack>
       <Divider/>
       <Center>
        
       <Stack direction={['column', 'row']} gap="40px" fontWeight="50" p="10px" >
        
        <Heading size="md" fontWeight="400"style={{fontFamily: "Arial, sans-serif",}} >Fishing </Heading>
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
}
export default Navbar