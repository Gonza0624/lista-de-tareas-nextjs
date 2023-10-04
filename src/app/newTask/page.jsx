"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewPage = ({ params }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:3000/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onsubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      });
      toast.success('Editando tarea...', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "content-type": "application/json",
        },
      });
      toast.success('Creando tarea...', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
    }

    router.refresh();
    setTimeout(() => {
      router.push("/");
    }, "2000");
  };

  return (
    <section className="newTask-section">
      <form onSubmit={onsubmit} className="newTask-section__form">
        <p className="newTask-section__title">{params.id ? 'Editar Tarea' : 'Crear tarea'}</p>
        <div className="textfield-outlined">
          <input
            name="title"
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder=" "
            required
          />
          <label htmlFor="title">Titulo</label>
        </div>
        <div className="textfield-outlined">
          <textarea
            id="description"
            name="description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder=" "
            required
          ></textarea>
          <label htmlFor="description">Descripcion</label>
        </div>
        <button className="newTask-section__btn" role="button">
        {params.id ? 'Editar' : 'Crear'}
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default NewPage;
