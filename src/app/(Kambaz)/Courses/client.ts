

import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const USERS_API = `${HTTP_SERVER}/api/users`;
export const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;



export const updateModule = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module
  );
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: any) => {
 const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};


export const fetchAllCourses = async () => {
  const response = await axiosWithCredentials.get(COURSES_API);
  return response.data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(COURSES_API, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};


export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${userId}/courses`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};

export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};


export const findQuizzesForCourse = async (cid: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${cid}/quizzes`
  );
  return response.data;
};

export const createQuizForCourse = async (cid: string) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${cid}/quizzes`,
    {} // server will use defaults
  );
  return response.data;
};

export const deleteQuiz = async (qid: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${qid}`
  );
  return response.data;
};

export const publishQuiz = async (qid: string) => {
  const response = await axiosWithCredentials.put(
    `${QUIZZES_API}/${qid}/publish`
  );
  return response.data;
};

export const unpublishQuiz = async (qid: string) => {
  const response = await axiosWithCredentials.put(
    `${QUIZZES_API}/${qid}/unpublish`
  );
  return response.data;
};

export const findQuizById = async (qid: string) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/${qid}`
  );
  return response.data;
};

export const updateQuiz = async (qid: string, quiz: any) => {
  const response = await axiosWithCredentials.put(
    `${QUIZZES_API}/${qid}`,
    quiz
  );
  return response.data;
};






