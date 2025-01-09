"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <div>
      <p>Their are {users.length} users</p>
      <p>
        {users.map((users) => (
          <li key={users.id}>{users.email}</li>
        ))}
      </p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
