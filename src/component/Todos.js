import React from 'react'

const Todos = ({ todos }) => {
  return (
    <>
      <ul className='list'>
        {
          todos.map((todo, index) =>
            <li key={index}>
              <span>
                {todo.name}
              </span>
              <strong className={
                todo.status === 'Birincil' ? 'status1' : todo.status === 'Ikincil' ? 'status2' : 'status3'
              }>
                {todo.status}
              </strong>
              <b>Sil</b>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default Todos