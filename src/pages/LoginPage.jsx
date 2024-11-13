import React, { useState } from 'react'
import Layout from './Layout'
import { Box, Button, Input, Text, useToast, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api/userApi';

const LoginPage = () => {
    const navigate = useNavigate()
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const toast = useToast()


    const onHandleLogin = async () => {

        try {
            await userApi.login(inputEmail, inputPassword)

            navigate('/')
            setInputEmail('')
            setInputPassword('')
    
            toast({
                title: 'Login Berhasil.',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            })

        } catch (error) {
            
        toast({
            title: 'Username atau Password salah',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
        })
        }

    }

    return (
        <Layout>
            <VStack bg={"white"} minH={"50vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} marginY={"auto"} p={"16"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue.800"}>Login</Text>
                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Email</Text>
                    <Input value={inputEmail} placeholder="Enter your email" color={"blue.800"} onChange={(event) => {
                        setInputEmail(event.target.value)
                    }} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Password</Text>
                    <Input value={inputPassword} type="password" placeholder="Enter your password" color={"blue.800"} onChange={(event) => {
                        setInputPassword(event.target.value)
                    }} />
                </Box>

                <Button marginTop={"4"} colorScheme="purple" w={"100%"}
                    onClick={onHandleLogin}>
                    Sign In
                </Button>
            </VStack >
        </Layout>
    )
}

export default LoginPage