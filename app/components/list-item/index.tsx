'use client'

import { useState } from "react"
import { Item } from "../task-list"

type ListItemProps = Item

export function ListItem({ title, description, done }: ListItemProps) {
  const [showDescription, setShowDescription] = useState(false)
  const [checked, setChecked] = useState(done)

  const descriptionRender = showDescription ? description : '...'

  function handleChange() {
    setChecked(!checked)
  }

  function handleShowDecription() {
    setShowDescription(!showDescription)
  }

  return (
    <li className="w-full bg-purple-600 p-4 grid grid-cols-3 mb-2 rounded-md text-center">
      <span className="">
        {title}
      </span>
      <span onClick={handleShowDecription} className="">{descriptionRender}</span>
      <span>
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </span>
    </li>
  )
}