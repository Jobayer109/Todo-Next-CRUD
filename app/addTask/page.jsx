"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create task");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="task"
          placeholder="Task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="description"
          placeholder="Description about the task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="px-3 py-2 text-md bg-green-600 hover:bg-green-700 text-white mt-3 rounded-md "
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
