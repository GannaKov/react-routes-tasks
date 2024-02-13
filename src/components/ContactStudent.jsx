import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";

const ContactStudent = () => {
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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contact:</h2>
      {student && (
        <>
          <p>email: {student?.email}</p>

          <p>phone: {student?.phone}</p>
          <p>website: {student?.website}</p>
        </>
      )}
    </div>
  );
};

export default ContactStudent;
