import React from 'react'

const AddTodos = ({
  inputRef,
  status,
  inputData,
  changeInput,
  selectData,
  changeSelect,
  addTodo
}) => {
  return (
    <>
      <div className='header'>
        <input
          ref={inputRef}
          className={status.input ? 'alertInput' : ''}
          type="text"
          value={inputData}
          onChange={changeInput}
          placeholder='Todo gir'/>

        <select 
          className={status.select ? 'alert' : ''}
          value={selectData}
          onChange={e => changeSelect(e)}>
          <option value="">Seç</option>
          <option value="1">Birincil</option>
          <option value="2">İkincil</option>
          <option value="3">Üçüncül</option>
        </select>

        <button onClick={addTodo}>Ekle</button>
      </div>
    </>
  )
}

export default AddTodos