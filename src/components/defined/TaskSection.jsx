import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TaskToDo from './TaskToDo'
import TaskDone from './TaskDone'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const TaskSection = () => {
    const navigate = useNavigate()

    return (
        <VStack bg={"white"} minH={"70vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} px={"16"} py={"8"}>
                <HStack w={"100%"}>
                    <Input placeholder="Add Task" />
                    <Button colorScheme={"purple"}><FaPlus /></Button>
                </HStack>

                {/* Card */}
                <Box w={"100%"} marginTop={"4"}>
                    <Text color={"blue.800"} fontWeight={"semibold"} textAlign={"left"}>Task To Do - 4</Text>
                </Box>

                <TaskToDo />

                <Box w={"100%"} marginTop={"4"}>
                    <Text color={"blue.800"} fontWeight={"semibold"} textAlign={"left"}>Task Done - 1</Text>
                </Box>

                <TaskDone />

            </VStack>
    )
}

export default TaskSection