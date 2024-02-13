import { Link, Outlet, useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";
import styles from "../styles/StudentPage.module.css";

const StudentPage = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then((res) => {
        setStudent(res);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <main className={styles.wrapper}>
      {/* {student && (
        <>
          <img src={student?.picture?.large} alt={student.name.last} />
          <p>{student.name.first}</p>
          <p>{student.name.last}</p>
        </>
      )} */}
      {student && (
        <div className={styles.cardWrapper}>
          <img
            className={styles.cardImg}
            src="https://fakeimg.pl/250x250/d17979/ededed?text=I+am+Student"
            alt={student.name}
          />
          <h1 className={styles.title}>{student.name}</h1>
          <p className={styles.text}>UserName: {student.username}</p>
        </div>
      )}
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="adress">
            Adress
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link className={styles.navLink} to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default StudentPage;
