import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";

export default function Activities() {
  const { data } = useQuery("/activities");
  const { token } = useAuth();
  console.log(token);

  return (
    <div>
      <ul>
        {data?.map((activity) => {
          return (
            <li key={activity.id}>
              {activity.name} <br /> {token ? <button>Delete</button> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
