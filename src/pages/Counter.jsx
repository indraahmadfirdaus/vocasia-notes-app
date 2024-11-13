import React from 'react'
import Layout from './Layout'
import { Button, Center, Text } from '@chakra-ui/react'
import useCounterStore from '../store/counter'

const Counter = () => {
    const count = useCounterStore((state) => state.count)
    const inc = useCounterStore((state) => state.inc)
    const dec = useCounterStore((state) => state.dec)



  return (
    <Layout>
        <Center marginY={"auto"} gap={"4"}>
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>{count}</Text>
            <Button onClick={inc}>Increment</Button>
            <Button onClick={dec}>Decrement</Button>
        </Center>
    </Layout>
  )
}

export default Counter