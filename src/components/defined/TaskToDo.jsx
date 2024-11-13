import { HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'
import useTaskStore from '../../store/task'

const TaskToDo = ({ title, id }) => {
  const doneTask = useTaskStore(state => state.doneTask)

  const onHandleDoneTask = () => {
    doneTask(id)
  }

  return (
    <HStack w={"100%"} bg={"purple.100"} borderRadius={"lg"} px={"8"} py={"4"}>
      <Text color={"purple.800"} fontWeight={"semibold"} textAlign={"left"}>{title}</Text>
      <IconButton color={"purple.800"} bg={"purple.100"} marginLeft={"auto"} onClick={onHandleDoneTask}>
        <FaCheck />
      </IconButton>
      <IconButton color={"purple.800"} bg={"purple.100"}>
        <FaTrash />
      </IconButton>
    </HStack>
  )
}

export default TaskToDo