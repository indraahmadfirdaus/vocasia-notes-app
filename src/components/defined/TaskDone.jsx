import { HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

const TaskDone = () => {
  return (
    <HStack w={"100%"} bg={"green.100"} borderRadius={"lg"} px={"8"} py={"4"}>
    <Text color={"green.800"} fontWeight={"semibold"} textAlign={"left"}>Nyuci Sendal</Text>
    <IconButton color={"green.800"} bg={"green.100"} marginLeft={"auto"}>
        <FaCheck />
    </IconButton>
    <IconButton color={"green.800"} bg={"green.100"}>
        <FaTrash />
    </IconButton>
</HStack>
  )
}

export default TaskDone