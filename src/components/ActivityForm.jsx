import { useState } from "react";
import useMutation from "../api/useMutation";
// import { usePage } from "../layout/PageContext";

export const ActivityForm = () => {
  const { mutate } = useMutation("POST", "/activities");
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

  return (
    <div>
      <form action={postForm}>
        <label>
          Activity Name:
          <input
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
    </div>
  );
};
