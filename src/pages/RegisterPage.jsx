import { useState } from 'react'
import {
    Button,
    Input,
    VStack,
    Text,
    Link,
    Box,
    useToast
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import { userApi } from '../api/userApi'

const RegisterPage = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formData.password !== formData.confirmPassword) {
                toast({
                    title: 'Error',
                    description: 'Passwords do not match',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                });
                return;
            }

            await userApi.register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            toast({
                title: 'Registration successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });

            navigate('/login');
        } catch (error) {
            toast({
                title: 'Registration failed',
                description: error.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }
    }

    return (
        <Layout>
            <VStack bg={"white"} minH={"50vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} marginY={"auto"} p={"16"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue.800"}>Register</Text>
                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Name</Text>
                    <Input
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        color={"blue.800"}
                        onChange={handleChange}
                    />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Email</Text>
                    <Input
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        color={"blue.800"}
                        onChange={handleChange}
                    />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Password</Text>
                    <Input
                        name="password"
                        value={formData.password}
                        type="password"
                        placeholder="Enter your password"
                        color={"blue.800"}
                        onChange={handleChange}
                    />
                </Box>

                <Box w={"100%"} marginTop={"4"}>
                    <Text color="blue.800" textAlign={"left"} marginBottom={"2"}>Confirm Password</Text>
                    <Input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        type="password"
                        placeholder="Confirm your password"
                        color={"blue.800"}
                        onChange={handleChange}
                    />
                </Box>

                <Button marginTop={"4"} colorScheme="purple" w={"100%"}
                    onClick={handleSubmit}>
                    Register
                </Button>
                <Text marginTop={4}>
                    Already have an account?{' '}
                    <Link as={RouterLink} to="/login" color="blue.500">
                        Login here
                    </Link>
                </Text>
            </VStack>
        </Layout>
    )
}

export default RegisterPage