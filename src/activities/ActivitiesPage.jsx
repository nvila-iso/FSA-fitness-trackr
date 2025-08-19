import { Activities } from "../components/ActivitiesList";
import { ActivityForm } from "../components/ActivityForm";


export default function ActivitiesPage() {

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <Activities />
      <ActivityForm />
    </>
  );
}
