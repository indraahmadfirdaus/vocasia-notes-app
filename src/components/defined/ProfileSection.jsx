import { VStack, Input, Button, HStack, Text, Box, IconButton, Avatar } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { userApi } from "../../api/userApi"
import useUserStore from "../../store/user"

const ProfileSection = () => {
    const navigate = useNavigate()
    const user = useUserStore()


    const onHandleSignOut = () => {
        userApi.signOut()
        navigate('/login')
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <VStack
            minH="60vh"
            minW="60"
            bg="white"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            padding={4}
        >
            {/* Avatar */}
            <Avatar size="xl" name="User Name" src={user?.photo_url} />

            {/* Welcome text with bold name */}
            <Text fontSize="lg">
                Welcome Back, <Text as="span" fontWeight="bold">{user?.name}</Text>
            </Text>

            {/* Edit Profile Button */}
            <Button colorScheme="purple" w="70%" variant={"outline"} onClick={() => {
                navigate('/update-profile')
            }}>
                Edit Profile
            </Button>

            {/* Sign Out Button (Red) */}
            <Button colorScheme="red" variant="solid" w="70%" onClick={onHandleSignOut}>
                Sign Out
            </Button>
        </VStack>
    )
}

export default ProfileSection