import {Box, Button, Checkbox, Heading,HStack,Input,Text,Image,Flex} from '@chakra-ui/react'
import sms from'../Images/sms.png'
import catalog from'../Images/catalog.png'
import email from '../Images/email.png'
import help from '../Images/help.png'
import chat from'../Images/live-chat.png'
import call from '../Images/phone-call.png'
import cloud from'../Images/cloud-computing.png'



function Footer(){
    return (
        <>
         <Box>
                    <Flex gap={5} mt={5} bg="green.100">
                        
                            <Text>CONTACT BASS PRO SHOPS</Text>
                            <Image w={30}src={chat}></Image>
                            
                             <Text>Chat Us</Text>
                             <Image  w={30}src={email}></Image>
                             <Text>Email us</Text>
                             <Image  w={30}src={call}></Image>
                             <Text>1-18000-857-02</Text>
                             <Image  w={30}src={help}></Image>
                             <Text>FAQ's</Text>
                             <Text>SUPPORT ID :UBD008154</Text>
                        
                    </Flex>
                </Box>
        <Box  display={{ base: "grid", md: "grid",sm:"grid" }}
        gridTemplateColumns={{ base: "1fr",sm:"1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
        gridGap="4" mt="4" p="8" bg="rgb(247,244,236)">
            <Box>
                <ul>
                    <Heading as='h1' size="md">HELP</Heading>
                    <li>Order Status</li>       
<li>Returns</li>
<li>Shipping Information</li>
<li>Product Subscriptions</li>
<li>Size Chart</li>
<li>Embroidery Services</li>
<li>Rod & Reel Repair</li>
<li>Boat & Boat Centers</li>
<li>Tracker Off-Road</li>
                </ul>
            </Box>
            <Box>
                <ul>
                    <Heading as='h1' size="md">RESOURCES</Heading>
                    <li>Outdoor Tips</li>       
<li>Gift Rejistry</li>
<li>Shipping Information</li>
<li>Online catalogue </li>
<li>Business sales</li>
<li>Wild Life Creation</li>
<li>Military Discount</li>
<li>Resaturant</li>
<li>Used Guns</li>
<li>Outdoor Reward</li>
<li>Pormostionns</li>
                </ul>
            </Box>
            <Box>
                <ul >
                    <Heading as='h1' size="md">HELP</Heading>
                    <li>About Us</li>       
<li>Find a Store</li>
<li>Company News</li>
<li>BassPro Shops story</li>
<li>Size Chart</li>
<li>Careers</li>
<li>About Our Founder</li>
<li>Our Community</li>
<li>Conservation</li>
<li>Affiliate Programme</li>
                </ul>
               
            </Box>
            <Box cursor="pointer">
          <Heading size="md">SIGN UP FOR EXCLUCSIVE DEALS & OFFERS</Heading>
          <Input type="text" bg='white'placeholder='Enter Your Email'/>
          <Text >You can unsubscribe at any time. Contact Us | Privacy Policy</Text>
          <Checkbox>I agree to receive special offers, promotions, and catalog announcements</Checkbox>
          <Button>SIGN IN</Button>
          <Box>
            <HStack mt={5}>
                <Image w={25} src={sms}/>
                <Text>Sign Up for SMS messenging</Text>
            </HStack>
            <HStack mt={5}>
            <Image w={25} src={catalog}/>
                <Text>get up our free catalogue</Text>
            </HStack>
            <HStack mt={5}>
            <Image w={25} src={cloud}/>
                <Text>Donwload Our App</Text>
            </HStack>
          </Box>
            </Box>

        </Box>
        </>
    );
}
export default Footer