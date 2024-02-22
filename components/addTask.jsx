import Link from "next/link";

function AddTask() {
  return (
    <div>
      <Link href="/addTask">
        <button className="w-full p-2 rounded-md mt-4 bg-slate-800 text-white">
          Add Task
        </button>
      </Link>
    </div>
  );
}

export default AddTask;
