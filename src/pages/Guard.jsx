import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

const Guard = ({ children }) => {
    const navigate = useNavigate()
    const toast = useToast()

    useEffect(() => {
        const accessToken = localStorage.getItem('token')
        if (!accessToken) {
            navigate('/login')
            toast({
                title: 'Unauthorized',
                description: 'Please login to access this page',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top'
            })
        }
    }, [navigate, toast])

    return (
        <>
            {children}
        </>
    )
}

export default Guard