import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "./todo.css";
import {addTodo,deleteTodo,removedTodo} from "../actions/index"

const Todo = () => {

    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list);
    const dispatch = useDispatch();

    return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption className='fig-caption'><h2>Add your TO-DO's here!!...👩🏻‍💻</h2></figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder="✍🏻 Add Items.." value={inputData} onChange= {(event) => setInputData(event.target.value)}/>
          <i className="fa fa-plus add-btn add-icon" onClick={() => dispatch(addTodo(inputData),setInputData(''))}>Add</i>
        </div>

        <div className='showItems'>
            {
                list.map((elem)=>{
                    return(
                        <div className='eachItem' key={elem.id}>
                            <h3 className='item'>{elem.data}</h3>
                            <div className='todo-btn item'>
                                <i className="far fa-trash-alt add-btn delete-icon" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                            </div>
                        </div>
                    )
                })
            }     
        </div>

        <div className='showItems'>
            <button className="remove-btn" onClick={()=> dispatch(removedTodo())}><span>Remove All</span></button>
        </div>
      </div>
    </div>
  )
}

export default Todo