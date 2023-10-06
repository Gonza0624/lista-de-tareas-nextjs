import Image from "next/image";
import React from "react";

const NoTasks = () => {
  return (
    <section className="no-tasks-section">
      <h3>Todavia no hay ninguna tarea</h3>
      <Image src={"./noTasks.svg"} alt="img" width={500} height={500} />
    </section>
  );
};

export default NoTasks;
