import axios from "axios";
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

//enroll course
export const enrollToCourse = async (courseId: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/enroll`,
    { courseId }
  );
  return data;
};

//unenroll course
export const unenrollFromCourse = async (courseId: any) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/current/courses/unenroll/${courseId}`
  );
  return data;
};

export const fetchEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return data;
};
