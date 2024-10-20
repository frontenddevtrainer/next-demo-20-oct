import { useState } from "react";

export default function LoginFormComponent({ onSubmit }) {
  const [username, setUsername] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(username);
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
}
