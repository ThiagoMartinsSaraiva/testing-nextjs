import { prisma } from "@/app/lib/prisma"
import { ListItem } from "../list-item"
import { Task } from "@prisma/client"

export type Item = {
  title: string
  description?: string
  done: boolean
}

async function getTasks(): Promise<Task[]> {
  const tasks = await prisma.task.findMany()
  return tasks
}

export async function TaskList() {
  const tasks = await getTasks()

  return (
    <ul className="w-full">
      <li className="grid grid-cols-3 w-full bg-purple-700 py-5 my-4 rounded-md text-center">
        <span className="font-bold">Title</span>
        <span className="font-bold">Description</span>
        <span className="font-bold">Done</span>
      </li>
        {tasks?.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
    </ul>
  )
}