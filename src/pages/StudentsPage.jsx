import { useEffect, useState } from "react";
import StudentsList from "../components/StudentsList";
import { getStudents } from "../services/requests";
// import styles from "../styles/StudentsPage.module.css";

const StudentsPage = () => {
  const [studentsArr, setStudentsArr] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    getStudents()
      .then((res) => {
        setStudentsArr(res);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  }, [setError]);

  return (
    <main>
      <StudentsList studentsArr={studentsArr} />
    </main>
  );
};

export default StudentsPage;
