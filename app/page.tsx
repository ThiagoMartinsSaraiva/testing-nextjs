import { AddTaskButton } from "./components/add-task-button";
import { TaskList } from "./components/task-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AddTaskButton />
      <TaskList />
    </main>
  );
}