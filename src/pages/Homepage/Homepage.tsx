import { useState } from "react";

const Homepage = () => {
  const [res, setRes] = useState("Before any request");

  return (
    <div>
      <p>Homepage</p>
      <p>{res}</p>
    </div>
  );
};

export default Homepage;
