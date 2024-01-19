import { prisma } from "@/app/lib/prisma"
import { ListItem } from "../list-item"

export type Item = {
  title: string
  description?: string
  done: boolean
}

export async function TaskList() {
  async function getTasks() {
    const tasks = await prisma.task.findMany()

    return tasks
  }

  const tasks = await Promise.resolve(getTasks())

  return (
    <ul className="w-full">
      <li className="grid grid-cols-3 w-full bg-purple-700 py-5 my-4 rounded-md text-center">
        <span className="font-bold">Title</span>
        <span className="font-bold">Description</span>
        <span className="font-bold">Done</span>
      </li>
      {
        tasks.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
    </ul>
  )
}