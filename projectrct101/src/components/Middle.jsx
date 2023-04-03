import {Box,Center,Divider,Heading,Image, SimpleGrid, VStack, Grid,Text} from '@chakra-ui/react'
import ImageSlider from './ImageSlider'
import Navbar from './Navbar'


function Middle(){
    return <Box>
    <Navbar/>
    <Box w={"95%"} m="auto">
        <VStack spacing={6} mt={4}>
        <Box position="relative">
      <Box
        as="img"
        src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1440/v1680019249/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Homepage-Main.png"
        alt="Sample image"
        width="100%"
        height="auto"
      />
      <Text
        position="absolute"
        top="50%"
        left="20%"
        transform="translate(-50%, -50%)"
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        textShadow="1px 1px #000"
      >
        <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_479/v1679582428/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/hero-logo.png"/>
      </Text>
    </Box>

        <Box w="100%" h="100px" bg="rgb(146,34,19)" m="auto" color="white" >
          <Center>< Heading pt="20px" color="gold" >EXCLUSIVE CLUB MEMBER SAVING</Heading></Center>
        </Box>
        <SimpleGrid columns={[1, null, 2]} spacing='20px' >
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1680019736/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Sub-spring-clothing.png"/>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1680019736/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Sub-fishing.png"/>
        </SimpleGrid>
         <Heading>HOT THIS WEEK</Heading>
         <Divider/>
         <SimpleGrid columns={[1, null, 2]} gap='50px ' >
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1680019736/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Sub-BTS.png"/>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_591/v1680025918/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Easter-text.png"/>
        </SimpleGrid>
        
        <Grid display={{ base: "block", md: "grid", sm:"grid" }} gridTemplateColumns={{ base: "1fr", sm:"repeat(2, 1fr)", md: "repeat(5, 1fr)" }} gridGap={4} boxShadow="md">
            <Box><Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1680098709/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/Homepage_Cat-1.png"/></Box>
            <Box><Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1680098709/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/Homepage_Cat-2.png"/></Box>
            <Box><Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1680098709/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/Homepage_Cat-3.png"/></Box>
            <Box><Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1680098709/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/Homepage_Cat-4.png"/></Box>
            <Box><Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_263/v1680098709/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/Homepage_Cat-5.png"/></Box>

         </Grid>
         <ImageSlider/>
         <Box display={{ base: "grid", lg:"grid",md: "grid", sm:"grid" }} gridTemplateColumns={{ base: "repeat(1,1fr)", sm:"repeat(2, 1fr)", md:"repeat(4,1fr)", lg: "repeat(8, 1fr)" }} gridGap={4}>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-bps.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-redhead.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1680099928/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/logo-winchester.png"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-garmin.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-carhartt.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-vortex.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1675727179/DigitalCreative/2023/Campaigns/wk06-2-9/Homepage/Brands-Update/logo-nr.jpg"/></Box>
            <Box> <Image src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1680100708/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/logo-avianx.png"/></Box>
         </Box>
         <SimpleGrid columns={[1, null, 2]} spacing='20px'>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-left.png"/>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_930/v1678485795/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/tracker-right.png"/>

         </SimpleGrid>
         <SimpleGrid columns={[1, null, 2]} spacing='20px'>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1680019734/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Sub-avian.png"/>
            <Image src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1680019734/DigitalCreative/2023/Campaigns/Wk13-3-30/Homepage/BPS/BPS_Sub-lowrance.png"/>

         </SimpleGrid>
        </VStack>
        
       
    </Box>
    
    </Box>
}

export default Middle