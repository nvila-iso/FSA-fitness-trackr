import useMutation from "../api/useMutation";

import { useAuth } from "../auth/AuthContext";

export default function ActivitiesCard({ activity }) {
  const { userId, token } = useAuth();
  const { mutate } = useMutation("DELETE", "/activities/" + activity.id, [
    "nicks-stuff",
  ]);

  const deleteEntry = () => {
    console.log("Pressed!");
    if (activity.creatorId !== userId) {
      alert("🧙 You shall not pass!");
      return;
    }
    mutate();
  };

  return (
    <div>
      <ul>
        <li className={activity.creatorId === userId && "user-item"}>
          {activity.name}
          {token && <button onClick={() => deleteEntry()}>Delete</button>}
        </li>
        {/* {activity.creatorId !== userId ? (
          <li>{activity.name} <br /> {token && <button>Delete</button>}</li>
        ) : (
          <li className="user-item">{activity.name} <br /> {token && <button>Delete</button>}</li>
        )} */}
      </ul>
    </div>
  );
}
