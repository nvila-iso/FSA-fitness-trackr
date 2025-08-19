import { useState } from "react";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import ActivitiesCard from "./ActivitiesCard";
import { ActivityForm } from "./ActivityForm";

export const Activities = () => {
  const { data } = useQuery("/activities", ["nicks-stuff"]);
  const { token, userId } = useAuth();
  const [itemId, setItemId] = useState();

  return (
    <div className="items-container">
      {data?.map((activity) => {
        return <ActivitiesCard key={activity.id} activity={activity} />;
      })}
    </div>
  );
};
