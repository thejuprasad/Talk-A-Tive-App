import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler=()=>{};


  return (
    <VStack>
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={Show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {Show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={()=>{
            setEmail("guest@example.com");
            setPassword("123456");

        }}
      >
        Get Guest User window
      </Button>
    </VStack>
  )
}

export default Login