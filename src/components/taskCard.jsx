"use client";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import React from "react";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
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
    <div className="task-card">
      <div>
        <p className="task-card__title">
          {task.id}. {task.title}
        </p>
        <p className="task-card__description">{task.description}</p>
        <p className="task-card__fecha">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="task-card__container-btn">
        <a className="task-card__edit" onClick={() => handleEdit(task.id)}>
          <FiEdit fontSize={22} />
        </a>
        <a className="task-card__delete" onClick={() => handleDelete(task.id)}>
          <AiOutlineDelete fontSize={25} />
        </a>
      </div>
    </div>
  );
};

export default TaskCard;
