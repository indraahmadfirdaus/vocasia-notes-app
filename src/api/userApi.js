import axiosInstance from "./axiosInstance"

const login = async (email, password) => {
    const { data } = await axiosInstance.post('/users/login', { email, password })
    localStorage.setItem('token', data.data.token)
    return data
}

const getProfile = async () => {
    const { data } = await axiosInstance.get('/users/profile')
    return data.data
}

const updateProfile = async (formData) => {
    const { data } = await axiosInstance.put('/users/profile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}

const signOut = async () => {
    localStorage.removeItem('token')
}

const register = async (payload) => {
    const { data } = await axiosInstance.post('/users/register', payload)
    return data
}

export const userApi = {
    login,
    getProfile,
    signOut,
    updateProfile,
    register
}