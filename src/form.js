import React from 'react';


const Form = ({ title, task_type, details, titleF, task_typeF, detailsF, onAddItem }) => 

    
        <form onSubmit={onAddItem}>
            <label>
                Title of Task:
                <input type="text" value={title} onChange={titleF} />
            </label>
            <label>
                Select Task Type:
                <select value={task_type} onChange={task_typeF}>
                    <option value=""></option>
                    <option value="Home">Home</option>
                    <option value="Outing">Outing</option>
                </select>
            </label>
            <label>
                Description of Task:
                <textarea type="text" value={details} onChange={detailsF} />
            </label>
            <button type="submit">Add Item</button>
        </form>
    



export default Form;