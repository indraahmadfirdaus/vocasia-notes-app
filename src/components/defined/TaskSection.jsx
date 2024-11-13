import { Box, Button, HStack, Input, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TaskToDo from './TaskToDo'
import TaskDone from './TaskDone'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useTaskStore from '../../store/task'
import { taskApi } from '../../api/taskApi'

const TaskSection = () => {
    const navigate = useNavigate()
    const tasks = useTaskStore(state => state.tasks)
    const fetchTasks = useTaskStore(state => state.fetchTasks)
    const toast = useToast()

    const [inputTaskValue, setInputTaskValue] = useState('')

    const onHandleChangeInputTask = (event) => {
        setInputTaskValue(event.target.value)
    }

    useEffect(() => {
        console.log(tasks);
        fetchTasks()
    }, [])

    const onHandleSubmitTask = async (event) => {

        try {
            console.log("INPUT VALUE: ", inputTaskValue);
            if (inputTaskValue) {
                const data = await taskApi.addTask(inputTaskValue)
                setInputTaskValue('')
                fetchTasks()
                toast({
                    title: data.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                })
            }

        } catch (error) {

        }

    }

    const renderTodo = () => {
        const count = tasks.filter(task => !task.isDone).length

        if (count) {
            return tasks.map((task, index) => {
                if (!task.isDone) {
                    return <TaskToDo title={task.title} id={task._id} key={index} />
                }
            })
        }

        return <Text>You Don't Have any Pending Task</Text>
    }

    return (
        <VStack bg={"white"} minH={"70vh"} borderRadius={"lg"} w={{ lg: "35vw", base: "70vw" }} px={"16"} py={"8"}>
            <HStack w={"100%"}>
                <Input placeholder="Add Task" onChange={onHandleChangeInputTask} value={inputTaskValue} />
                <Button colorScheme={"purple"} onClick={onHandleSubmitTask}><FaPlus /></Button>
            </HStack>

            {/* Card */}
            <Box w={"100%"} marginTop={"4"}>
                <Text color={"blue.800"} fontWeight={"semibold"} textAlign={"left"}>Task To Do - {
                    tasks.filter(task => !task.isDone).length
                }</Text>
            </Box>

            {
                renderTodo()
            }

            <Box w={"100%"} marginTop={"4"}>
                <Text color={"blue.800"} fontWeight={"semibold"} textAlign={"left"}>Task Done - {
                    tasks.filter(task => task.isDone).length
                }</Text>
            </Box>

            {
                tasks.map((task, index) => {
                    if (task.isDone) {
                        return <TaskDone title={task.title} id={task._id} key={index} />
                    }
                })
            }

        </VStack>
    )
}

export default TaskSection