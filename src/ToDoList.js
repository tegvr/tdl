import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='ToDoList'>
            <span className='peringatan'>Klik Item untuk mengubah status.</span>
            
           
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <div>
            <button className="hapus-btn" onClick={handleFilter}>Hapus yg sudah selesai</button>
            </div>
        </div>
    );
};

export default ToDoList;