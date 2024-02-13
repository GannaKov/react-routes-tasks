import { useParams } from "react-router-dom";

const Student = () => {
  const { id } = useParams();

  return (
    <div>
      <h1> Hello {id}!</h1>
    </div>
  );
};

export default Student;
