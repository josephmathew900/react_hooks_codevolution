import React from "react";
import useInput from "./Hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name:</label>
          <input {...bindFirstName} type="text"></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...bindLastName}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
