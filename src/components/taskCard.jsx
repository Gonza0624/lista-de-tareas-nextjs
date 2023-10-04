"use client";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import React from "react";
import { useRouter } from "next/navigation";

const TaskCard = ({ tasks }) => {
  const router = useRouter();

  const handleEdit = async (id) => {
    router.push(`/task/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro de que quieres borrar esta tarea?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#FF0000",
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      router.refresh();

      if (res.status === 200) {
        await Swal.fire(
          "Tarea borrada",
          "La tarea ha sido eliminada correctamente",
          "success"
        );
        router.refresh();
      } else {
        await Swal.fire("Error", "No se pudo borrar la tarea", "error");
      }
    }
  };

  return (
    <main className="task-card">
      {tasks.map((task) => (
        <ul className="task-card__content" key={task.id}>
          <div>
            <li className="task-card__title">
              {task.id}. {task.title}
            </li>
            <li className="task-card__description">{task.description}</li>
            <li className="task-card__fecha">
              {new Date(task.createAt).toLocaleDateString()}
            </li>
          </div>

          <div className="task-card__container-btn">
            <a onClick={() => handleEdit(task.id)} className="task-card__edit">
              <FiEdit fontSize={22} />
            </a>
            <a onClick={() => handleDelete(task.id)} className="task-card__delete">
              <AiOutlineDelete fontSize={25} />
            </a>
          </div>
        </ul>
      ))}
    </main>
  );
};

export default TaskCard;
