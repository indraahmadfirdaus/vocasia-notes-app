import { VStack } from '@chakra-ui/react'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <VStack
    bg={"purple.100"}
    h={"100vh"}
  >
    {children}
  </VStack>
  )
}

export default Layout