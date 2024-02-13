import { Link, Outlet, useParams } from "react-router-dom";
import { getSingleStudent } from "../services/requests";
import { useEffect, useState } from "react";

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
    <main>
      {/* {student && (
        <>
          <img src={student?.picture?.large} alt={student.name.last} />
          <p>{student.name.first}</p>
          <p>{student.name.last}</p>
        </>
      )} */}
      {student && (
        <>
          <img
            src="https://fakeimg.pl/250x250/d17979/ededed?text=I+am+Student"
            alt={student.name}
          />
          <p>{student.name}</p>
          <p>{student.username}</p>
        </>
      )}
      <ul>
        <li>
          <Link to="adress">Adress</Link>
        </li>

        <li>
          <Link to="data">Data</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default StudentPage;
