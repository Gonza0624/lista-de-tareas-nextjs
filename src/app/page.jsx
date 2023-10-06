import TaskCard from "@/components/taskCard";
import axios from "axios";
import React from "react";
import NoTasks from "./noTasks/page";

const loadTasks = async () => {
  const { data } = await axios.get("http://localhost:3000/api/tasks");
  return data;
};

const Home = async () => {
  const tasks = await loadTasks();
  if (tasks.length === 0) return <NoTasks />;
  return (
    <section className="home-section">
      <main className="home-section__main">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </main>
    </section>
  );
};

export default Home;
