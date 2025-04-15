import TaskCard from "../../components/TaskCard/TaskCard";
import { TaskDocument } from "../../models/task";
import Link from "next/link";
import React from "react";
import { CgAddR } from "react-icons/cg";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: 'no-store',
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
}

export default async function MainPage() {
  const allTasks = await getAllTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">すべてのタスク</h1>
        <Link href='/new' className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-rose-400 hover:bg-rose-300">
          <CgAddR className="size-5" />
          <div>タスクの新規作成</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => <TaskCard key={task._id} task={task} />)}
      </div>
    </div>
  );
}
