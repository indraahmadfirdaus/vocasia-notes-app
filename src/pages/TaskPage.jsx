import React from 'react'
import Layout from './Layout'
import { VStack, Input, Button, HStack, Text, Box, IconButton } from "@chakra-ui/react"
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";
import TaskToDo from '../components/defined/TaskToDo';
import TaskDone from '../components/defined/TaskDone';
import { useNavigate } from 'react-router-dom';

const TaskPage = () => {
    const navigate = useNavigate()


    return (
        <Layout>
            <VStack bg={"white"} h={"70vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} marginY={"auto"} p={"16"}>
                {/* Title */}
                <HStack>
                    <Text color={"blue.800"} fontWeight={"bold"}>VOCA</Text>
                    <Text color={"blue.700"}>Task</Text>
                </HStack>

                {/* Title */}
                <HStack w={"100%"}>
                    <Input placeholder="Add Task" />
                    <Button colorPalette={"purple"} variant={"surface"}><FaPlus /></Button>
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

                <Button colorPalette={"red"} onClick={() => {
                    navigate('/login')
                }}>Sign out</Button>
            </VStack>
        </Layout>
    )
}

export default TaskPage