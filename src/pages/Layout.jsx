import { VStack } from '@chakra-ui/react'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <VStack
    bg={"blue.200"}
    h={"100vh"}
  >
    {children}
  </VStack>
  )
}

export default Layout