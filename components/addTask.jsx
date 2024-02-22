import Link from "next/link";
import { TiPlus } from "react-icons/ti";

function AddTask() {
  return (
    <div className="text-center">
      <Link href="/addTask">
        <button className="w-full p-2 rounded-md mt-4 bg-slate-800 text-white flex items-center justify-center gap-3">
          <span> Add Task</span>
          <span>
            <TiPlus />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default AddTask;
