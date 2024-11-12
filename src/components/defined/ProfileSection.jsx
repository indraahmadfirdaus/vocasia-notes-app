import { VStack, Input, Button, HStack, Text, Box, IconButton, Avatar } from "@chakra-ui/react"
import React from 'react'
import { useNavigate } from "react-router-dom"

const ProfileSection = () => {
    const navigate = useNavigate()

    return (
        <VStack
            minH="60vh"
            w="60"
            bg="white"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            padding={4}
        >
            {/* Avatar */}
            <Avatar size="xl" name="User Name" src="https://bit.ly/dan-abramov" />

            {/* Welcome text with bold name */}
            <Text fontSize="lg">
                Welcome Back, <Text as="span" fontWeight="bold">Name!</Text>
            </Text>

            {/* Edit Profile Button */}
            <Button colorScheme="purple" w="70%" variant={"outline"} onClick={() => {
                navigate('/update-profile')
            }}>
                Edit Profile
            </Button>

            {/* Sign Out Button (Red) */}
            <Button colorScheme="red" variant="solid" w="70%" onClick={() => {
                navigate('/login')
            }}>
                Sign Out
            </Button>
        </VStack>
    )
}

export default ProfileSection