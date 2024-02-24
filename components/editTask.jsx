"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch ");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="task"
          placeholder="Task name"
        />
        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="description"
          placeholder="Description about the task"
        />
        <div>
          <button
            type="submit"
            className="px-3 py-2 text-md bg-green-600 hover:bg-green-700 text-white mt-3 rounded-md "
          >
            Update Task
          </button>
        </div>
      </form>
    </>
  );
}

export default EditTaskForm;
