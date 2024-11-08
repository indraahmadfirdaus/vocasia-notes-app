import React from 'react'
import Layout from './Layout'
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import { CiLogin } from "react-icons/ci";
import { redirect, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate()

    // const navigate = (destination) => {
    //     redirect(destination)
    // }

    return (
        <Layout>
            <VStack bg={"white"} h={"50vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} marginY={"auto"} p={"16"}>
                <Text fontSize={"xl"} fontWeight={"bold"} color={"blue.800"}>Login</Text>
                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Email</Text>
                    <Input placeholder="Enter your email" color={"blue.800"} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Password</Text>
                    <Input type="password" placeholder="Enter your password" color={"blue.800"} />
                </Box>

                <Button marginTop={"4"} colorPalette={"purple"} w={"100%"}
                onClick={() => {
                    navigate('/')
                }}>
                    <CiLogin />

                    Sign In
                </Button>
            </VStack >
        </Layout>
    )
}

export default LoginPage