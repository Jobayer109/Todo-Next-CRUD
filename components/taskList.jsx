import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Error occurred in fetching tasks");
  }
  return res.json();
};

const TaskList = async () => {
  const tasks = await getTasks();

  return (
    <main className="  ">
      {tasks.map((t) => (
        <div
          key={t._id}
          className="flex items-center justify-between border border-black rounded-md my-3 p-3"
        >
          <div>
            <h2 className="text-xl font-bold ">{t.title}</h2>
            <p>{t.description}</p>
          </div>
          <div className="flex gap-4">
            <HiTrash className="text-red-500" size={24} />
            <Link href={`/editTask/${t._id}`}>
              <FaEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default TaskList;
