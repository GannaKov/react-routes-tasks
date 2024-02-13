import axios from "axios";

export const getStudents = async () => {
  const { data } = await axios.get(
    // `https://randomuser.me/api/?results=${number}` number = 10
    `https://jsonplaceholder.typicode.com/users`
  );
  //   return data.results;
  return data;
};

export const getSingleStudent = async (id) => {
  const { data } = await axios.get(
    // `https://randomuser.me/api/?uuid=${uuid}` uuid
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  //   return data.results[0];
  return data;
};
