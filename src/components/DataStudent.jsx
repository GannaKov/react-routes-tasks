import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";

const DataStudent = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getSingleStudent(id)
      .then((res) => {
        setStudent(res);
      })
      .catch((error) => console.log(error.message));
  }, [id]);
  return <div>Data</div>;
};

export default DataStudent;
