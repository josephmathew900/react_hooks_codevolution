import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your firstname is - {name.firstName}</h2>
      <h2>Your lastname is - {name.lastName}</h2>
    </div>
  );
}
