import axios from "axios";
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

//sign in
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

//sign up
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signup`,
    user
  );
  return response.data;
};

//update user
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

//profile retrieving
export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/profile`
  );
  return response.data;
};

//sign out
export const signout = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signout`
  );
  return response.data;
};

//find courses for enrooled user end point
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data;
};

//create new courses
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};

//find all users
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(
    USERS_API
  );
  return response.data;
};

//find user by role
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(
    `${USERS_API}?role=${role}`
  );
  return response.data;
};

//find user by partial name
export const findUsersByPartialName = async (
  name: string
) => {
  const response = await axios.get(
    `${USERS_API}?name=${name}`
  );
  return response.data;
};

//find user by id
export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

//delete user
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(
    `${USERS_API}/${userId}`
  );
  return response.data;
};

//create user
export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
