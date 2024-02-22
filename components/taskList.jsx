import { FaEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";

function TaskList() {
  return (
    <main className="flex items-center justify-between border border-black rounded-md my-3 p-3">
      <div>
        <h2 className="text-xl font-semibold">HTML</h2>
        <p>A markup language</p>
      </div>
      <div className="flex gap-4">
        <HiTrash className="text-red-500" />
        <FaEdit />
      </div>
    </main>
  );
}

export default TaskList;
