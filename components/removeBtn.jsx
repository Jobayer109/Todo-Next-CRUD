"use client";

import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi";

function RemoveBtn({ id }) {
  const router = useRouter();
  const handleRemove = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return <HiTrash onClick={handleRemove} className="text-red-500" size={24} />;
}

export default RemoveBtn;
