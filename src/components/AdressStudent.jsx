import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";

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
    <div>
      {student && (
        <>
          <h2>Address:</h2>

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
