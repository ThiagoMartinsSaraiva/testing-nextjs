'use client'

export function AddTaskButton() {
  function handleClick() {
    console.log('clicou')
  }

  return (
    <button 
      className="bg-purple-600 p-4 rounded-md self-end hover:bg-purple-700 font-bold" 
      onClick={handleClick}
    >
      New task
    </button>
  )
}