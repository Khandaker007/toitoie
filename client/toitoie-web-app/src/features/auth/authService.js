import axios from 'axios';

const register = async (userData) => {
    const response = axios.post('/api/user/', userData)
    if (response.data){
        localStorage.setItem('userToken', JSON.stringify(response.data))
    }

    return response.data;
}
const login = async () => {

}
const logout = () => {

}

const authService = {
    register,
    login,
    logout
}

export default authService;