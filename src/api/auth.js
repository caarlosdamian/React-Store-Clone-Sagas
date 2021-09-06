import axios from "axios";

async function login(credentials) {
  const response = await axios.post(
    "http://localhost:5000/api/auth/",
    credentials
  );
  return response.data;
}

const fetchAuth = {
  login,
};

export default fetchAuth;
