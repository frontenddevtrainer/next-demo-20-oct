"use client"
import { useState, useEffect } from "react";

export default function PeopleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    }

    fetchPeople();
  }, []);

  if (!data) {
    return <p>Loading</p>;
  }

  return <div>{data[0].name}</div>;
}
