import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='ToDoList'>
            <span className='peringatan'>Klik Item untuk mengubah status.</span>
            <div>
            <button style={{margin: '20px'}} onClick={handleFilter}>Hapus yg sudah selesai</button>
            </div>
           
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            
        </div>
    );
};

export default ToDoList;