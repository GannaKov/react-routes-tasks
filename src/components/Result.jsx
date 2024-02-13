import { useParams } from "react-router-dom";

const Result = () => {
  const { name } = useParams();
  return (
    <div>
      <h2> No results for {name}!</h2>
    </div>
  );
};

export default Result;
