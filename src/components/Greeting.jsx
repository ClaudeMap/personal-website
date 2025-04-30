import { useState } from "react";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thanks for checking this out!</h3>
      <button onClick={() => setGreeting(randomMessage())}>Press me</button>
    </div>
  );
}
