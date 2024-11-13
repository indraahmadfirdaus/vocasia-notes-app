import { HStack, IconButton, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'
import useTaskStore from '../../store/task'
import { taskApi } from '../../api/taskApi'

const TaskToDo = ({ title, id }) => {
  const doneTask = useTaskStore(state => state.doneTask)
  const fetchTasks = useTaskStore(state => state.fetchTasks)
  const toast = useToast()


  const onHandleDoneTask = () => {
    doneTask(id)
  }

  const onHandleDeleteTask = async () => {
    try {
      const data = await taskApi.deleteTask(id)
      fetchTasks()
      toast({
        title: data.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
    })
    } catch (error) {
      
    }
  }

  return (
    <HStack w={"100%"} bg={"purple.100"} borderRadius={"lg"} px={"8"} py={"4"}>
      <Text color={"purple.800"} fontWeight={"semibold"} textAlign={"left"}>{title}</Text>
      <IconButton color={"purple.800"} bg={"purple.100"} marginLeft={"auto"} onClick={onHandleDoneTask}>
        <FaCheck />
      </IconButton>
      <IconButton color={"purple.800"} bg={"purple.100"} onClick={onHandleDeleteTask}>
        <FaTrash />
      </IconButton>
    </HStack>
  )
}

export default TaskToDo