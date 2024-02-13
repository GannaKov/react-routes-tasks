import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";
import styles from "../styles/Adress.module.css";

const AdressStudent = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then((res) => {
        setStudent(res);
        console.log(res.address.street);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {student && (
        <>
          <h2 className={styles.title}>Address:</h2>

          <p>
            {student?.address?.street}
            {student?.address?.suite}
          </p>
          <p>{student?.address?.city}</p>
          <p>{student?.address?.zipcode}</p>
        </>
      )}
    </div>
  );
};

export default AdressStudent;
