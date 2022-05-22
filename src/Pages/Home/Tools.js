import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div>
      <h3 className="text-center my-8 text-3xl">
        Tools We Manufacture {tools.length}
      </h3>
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 justify-items-center">
        {tools.map((tool, index) => (
          <Tool key={index} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
