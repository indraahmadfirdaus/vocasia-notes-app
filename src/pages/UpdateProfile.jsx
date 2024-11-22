import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Avatar, Box, Button, HStack, IconButton, Input, Text, useToast, VStack } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/user'
import { userApi } from '../api/userApi'

const UpdateProfile = () => {
    const navigate = useNavigate()
    const user = useUserStore(state => state.user)
    const toast = useToast()

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        photo: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        if (formData.password) data.append('password', formData.password);
        if (formData.photo) data.append('photo', formData.photo);

        try {
            await userApi.updateProfile(data)

            toast({
                title: 'Update Profile Berhasil.',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            })

            navigate('/');
        } catch (error) {
            toast({
                title: 'Gagal.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            })
            console.error('Error updating profile:', error);
        }
    };

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        if (e.target.files?.[0]) {
            setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
        }
        console.log(formData);
    };

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

                <Avatar size="xl" name="User Name" src={user?.photo_url} />

                <Box w={"100%"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Profile picture</Text>
                    <Input type='file' onChange={handleFileChange} />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Name</Text>
                    <Input
                        placeholder="Enter your Name"
                        color={"blue.800"}
                        defaultValue={user?.name}
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Email</Text>
                    <Input
                        placeholder="Enter your Email"
                        color={"blue.800"}
                        defaultValue={user?.email}
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Password</Text>
                    <Input
                        placeholder="*********"
                        type='password'
                        color={"blue.800"}
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    />
                </Box>

                <Button marginTop={"4"} colorScheme="purple" w={"100%"}
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </VStack >
        </Layout>
    )
}

export default UpdateProfile