import { useParams, useNavigate } from "react-router-dom";
import { USERS } from "../../constants";

export const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();

  const user = USERS.find((user) => user.id === Number(params.id));
  const fullName = `${user.firstName} ${user.lastName}`;

  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <section>
      <img src={user.avatar} alt={fullName} />
      <h1>{fullName}</h1>
      <p>email: {user.email}</p>
      <p>gender: {user.gender}</p>
      <button onClick={handleBackButtonClick}> Back to main</button>
    </section>
  );
};
