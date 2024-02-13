/* eslint-disable react/prop-types */
import styles from "../styles/StudentsList.module.css";

import { Link } from "react-router-dom";

const StudentsList = ({ studentsArr }) => {
  // const { id } = useParams();

  return (
    <ul className={styles.list}>
      {/* {studentsArr.map((student) => (
        <li key={student.login.uuid}>
          <Link to={`${student.login.uuid}`}>
            <p>{student.name.first}</p>
            <p>{student.name.last}</p>
            <img src={student.picture.medium} alt={student.name.last} />
          </Link>
        </li>
      ))} */}
      {studentsArr.map((student) => (
        <li key={student.id} className={styles.item}>
          <Link to={`${student.id}`}>
            <h2 className={styles.title}>{student.name}</h2>
            <img
              className={styles.img}
              src="https://fakeimg.pl/200x200/6dc46a/ededed?text=I+am+Student"
              alt={student.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
