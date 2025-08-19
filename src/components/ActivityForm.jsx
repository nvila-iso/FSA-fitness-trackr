import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export const ActivityForm = () => {
  const { mutate } = useMutation("POST", "/activities", ["nicks-stuff"]);
  const { token } = useAuth();
  // const { setPage } = useState("activities");

  const postForm = (FormData) => {
    const userSub = {
      name: FormData.get("name"),
      description: FormData.get("desc"),
    };

    // console.log(userSub);

    mutate(userSub);
    // alert("Activity Submitted!");
    // FormData.preventDefault();
  };

  if (token) {
    return (
      <form action={postForm}>
        <label>
          Activity Name:
          <input
            required
            type="text"
            placeholder="Think of something cool!"
            name="name"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            placeholder="Describe that cool thing!"
            name="desc"
          />
        </label>
        <button>Submit!</button>
      </form>
    );
  }
};
