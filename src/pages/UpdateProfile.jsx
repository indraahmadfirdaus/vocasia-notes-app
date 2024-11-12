import React from 'react'
import Layout from './Layout'
import { Avatar, Box, Button, HStack, IconButton, Input, Text, VStack } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <VStack bg={"white"} minH={"50vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} marginY={"auto"} px={"16"} py="8">
                <HStack w={"100%"}>
                    <IconButton
                    onClick={() => {
                        navigate('/')
                    }}
                    >
                        <FaChevronLeft />
                    </IconButton>

                    <Text marginLeft={"2"} fontSize={"xl"} fontWeight={"bold"} color={"blue.800"}>Update Profile</Text>
                </HStack>

                <Avatar size="xl" name="User Name" src="https://bit.ly/dan-abramov" />

                <Box w={"100%"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Profile URL</Text>
                    <Input placeholder="Enter your Profile URL" color={"blue.800"} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Name</Text>
                    <Input placeholder="Enter your Name" color={"blue.800"} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Email</Text>
                    <Input placeholder="Enter your email" color={"blue.800"} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Password</Text>
                    <Input type="password" placeholder="Enter your password" color={"blue.800"} />
                </Box>

                <Button marginTop={"4"} colorScheme="purple" w={"100%"}
                    onClick={() => {
                        
                    }}>
                    Submit
                </Button>
            </VStack >
        </Layout>
    )
}

export default UpdateProfile