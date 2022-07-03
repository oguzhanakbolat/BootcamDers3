import React, { useEffect, useState }  from 'react';

const Todos = ({ todos, deleteItem }) => {
  const [nameStatus, setNameStatus] = useState('A-Z');
  const [statusStatus, setStatusStatus] = useState('A-Z');
  const [sortList, setSortList] = useState('');
  const [list, setList] = useState(todos || []);

  /*
  function test(parameter, ahmet = [1,2,3]) {
    console.log('test', parameter, ahmet);
  }

  test(15, ['a','b', 'c', 'd']);
  */

  const sort = (value, durum = false) => {
    let newTodos;

    if(durum) {
      newTodos = [...todos];
    }
    else {
      newTodos = [ ...list ]
    }
   

    setSortList(value);

    if(value === 'name') {
      console.log('1')
      if(nameStatus === 'A-Z') {
        console.log('2')
        setNameStatus('Z-A');
        newTodos.sort((a,b) => {
          if(a.name > b.name) {
            return -1;
          }
          if(!(a.name > b.name)) {
            return 1;
          }
          return 0
        });

        console.log(newTodos)
      }
      else {
        setNameStatus('A-Z');
        newTodos.sort((a,b) => {
          if(b.name > a.name) {
            return -1;
          }
          if(!(b.name > a.name)) {
            return 1;
          }
          return 0
        });
      }
    }
    else if(value === 'status') {
      if(statusStatus === 'A-Z') {
        setStatusStatus('Z-A');
        newTodos.sort((a,b) => {
          if(a.status > b.status) {
            return -1;
          }
          if(!(a.status > b.status)) {
            return 1;
          }
          return 0
        });
      }
      else {
        setStatusStatus('A-Z');
        newTodos.sort((a,b) => {
          if(b.status > a.status) {
            return -1;
          }
          if(!(b.status > a.status)) {
            return 1;
          }
          return 0
        });
      }
    }


    setList(newTodos);
  }

  const reset = () => {

    if(sortList === 'name') {
      sort('name', true)
    }
    else if(sortList === 'status') {
      sort('status', true)
    }

    setList(todos);
  }

  useEffect(() => {
    setList(todos)
  }, [todos]);

  const onChangeIntut = e => {
    const value = e.target.value;

    if(value) {
      const newList = list.filter(item =>  item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      setList(newList)
    }
    else {
      reset()
    }
  }

  const changeSelect = e => {
    const value = e.target.value;

    if(value) {
      const newList = list.filter(item =>  item.status === value);
      setList(newList)
    }
    else {
      reset()
    }

  }

  return (
    <>

      <ul className='list'>
        <div>
          <input type="text" onChange={e => onChangeIntut(e)}/>
          <select 
            onChange={e => changeSelect(e)}>
            <option value="">Seç</option>
            <option value="1">Birincil</option>
            <option value="2">İkincil</option>
            <option value="3">Üçüncül</option>
          </select>
        </div>


        <li className='listHeader'>
          <span onClick={() => sort('name')}>İşin Adı</span>
          <strong onClick={() => sort('status')}>Öncelik Sırası</strong>
          <b />
        </li>
        {
          list.map((todo, index) =>
            <li key={index}>
              <span>
                {todo.name}
              </span>
              <strong className={ 'status' + todo.status}>
                {
                  todo.status === '1' ? 'Birincil' : todo.status === '2' ? 'İkincil' : 'Üçüncül'
                }
              </strong>
              <b onClick={() => deleteItem(index)}>Sil</b>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default Todos