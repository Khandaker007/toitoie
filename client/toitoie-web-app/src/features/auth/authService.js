import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("/api/user/", userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("userToken", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post("/api/user/", userData);
  if (response.data) {
    localStorage.setItem("userToken", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("userToken");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
