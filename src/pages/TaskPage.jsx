import React from 'react'
import Layout from './Layout'
import TaskSection from '../components/defined/TaskSection';
import ProfileSection from '../components/defined/ProfileSection';
import { HStack } from '@chakra-ui/react';

const TaskPage = () => {

    return (
        <Layout>
            <HStack justify="center" align="flex-start" w="100%" marginY={"auto"}>
                <ProfileSection />
                <TaskSection />
            </HStack>
        </Layout>
    )
}

export default TaskPage