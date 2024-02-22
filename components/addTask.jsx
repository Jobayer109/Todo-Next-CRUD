import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";

function AddTask() {
  return (
    <div className="flex items-center justify-between rounded-md px-4 py-3 bg-slate-800 text-white mt-6">
      <div>
        <Link href="/">
          <IoHomeSharp className="text-2xl " />
        </Link>
      </div>
      <div className="me-0">
        <Link href="/addTask">
          <button className=" p-2 bg-white hover:bg-gray-200 rounded-md text-black font-semibold flex items-center justify-center gap-1">
            <span> Add Task</span>
            <span>
              <TiPlus className="text-green-600 text-lg" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddTask;
