function EditTask() {
  return (
    <div>
      <form>
        <input
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="task"
          placeholder="Task name"
        />
        <input
          className="w-full border border-gray-400 px-4 py-3 text-lg mt-3 rounded-md"
          type="text"
          name="description"
          placeholder="Description about the task"
        />
      </form>
      <div>
        <button className="px-3 py-2 text-md bg-green-600 hover:bg-green-700 text-white mt-3 rounded-md ">
          Update Task
        </button>
      </div>
    </div>
  );
}

export default EditTask;
