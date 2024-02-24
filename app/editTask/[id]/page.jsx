import EditTaskForm from "@/components/editTask";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetching");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EditTask({ params }) {
  const { id } = params;
  const task = await getTaskById(id);

  const { title, description } = task.topic;
  console.log(title, description);
  return <EditTaskForm id={id} title={title} description={description} />;
}

export default EditTask;
