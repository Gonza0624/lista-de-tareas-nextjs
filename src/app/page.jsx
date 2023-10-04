import TaskCard from "@/components/taskCard";
import { prisma } from "@/libs/prisma";
import React from "react";

const loadTasks = async () => {
  return await prisma.task.findMany();
};

const Home = async () => {
  const tasks = await loadTasks();
  return (
    <section className="home-section">
      <TaskCard tasks={tasks} />
    </section>
  );
};

export default Home;
