import { HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

const TaskToDo = () => {
  return (
    <HStack w={"100%"} bg={"purple.100"} borderRadius={"lg"} px={"8"} py={"4"}>
      <Text color={"purple.800"} fontWeight={"semibold"} textAlign={"left"}>Nyuci Baju</Text>
      <IconButton color={"purple.800"} bg={"purple.100"} marginLeft={"auto"}>
        <FaCheck />
      </IconButton>
      <IconButton color={"purple.800"} bg={"purple.100"}>
        <FaTrash />
      </IconButton>
    </HStack>
  )
}

export default TaskToDo