import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import account from '../Images/account.png';
import { Alert,AlertIcon } from '@chakra-ui/react';
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  // add more users here
];

function LoginDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createAccount, setCreateAccount] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleCreateAccount = () => setCreateAccount(true);
  const handleExistingAccount = () => setCreateAccount(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createAccount) {
      // Handle create account logic here
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
      } else {
        // Create new account with email and password
        onClose();
      }
    } else {
      // Handle login logic here
      const user = users.find((user) => user.email === email);
      if (!user || user.password !== password) {
        setErrorMessage('Incorrect email or password');
        
      } else {
        // Log in user with email and password
       
        onClose();
        
      }
    }
  };
  

  return (
    <>
      <Box onClick={onOpen}>
        <Image src={account} width="50px" alt="Login" />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{createAccount ? 'Create Account' : 'Sign-in to your Bass Pro Shops account'}</DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing="24px">
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </FormControl>
                {createAccount && (
                  <FormControl id="confirmPassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </FormControl>
                )}
                {errorMessage && (
                  <Text color="red" fontSize="md">
                    {errorMessage}
                  </Text>
                )}
                <Button type="submit">{createAccount ? 'Create Account' : 'Login'}</Button>
                {!createAccount ? (
                  <Button onClick={handleCreateAccount} cursor="pointer">
                    Create an account
                  </Button>
                ) : (
                  <Button onClick={handleExistingAccount} cursor="pointer">
                    Back to login
                  </Button>
                )}
              </Stack>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default LoginDrawer;
