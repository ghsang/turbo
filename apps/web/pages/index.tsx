import {useEffect, useState} from "react";
import { Button } from "ui";

export default function Web() {
  const [name, setName] = useState("");

  useEffect(() => {
    (
      async () => {
        const response = await fetch("/api/hello");

        const data: { name: string } = await response.json();

        setName(data.name)
      }
    )();
  })


  return (
    <div>
      <h1>{name}</h1>
      <Button />
    </div>
  );
}
