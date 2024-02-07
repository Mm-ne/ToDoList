/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import styles from "./ToDoList.module.css";

function ToDoList(){



    const [tasks, setTasks] = useState([]);



//////////////////////////////////////////////
    function handleAddChange(){
        
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value=("");
        
        if(newTask.trim() !== ""){//if after trim func that deletes the whitespeace !== empty string
                                  //then add a new Task
            setTasks(prevTasks => ([...prevTasks, newTask]));
        }
       

    }

    function handleRemoveChange(index){
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
        
    }
//////////////////////////////////////////////




//////////////////////////////////////////////
    function moveTaskUp(index){

        if(index > 0){  
            const updatedTasks = [...tasks];

            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];

            setTasks(updatedTasks);
        }


    }

    function moveTaskDown(index){

        if(index < tasks.length-1){  
            const updatedTasks = [...tasks];

            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }
//////////////////////////////////////////////

    return(
        <div className={styles.toDoList_div}>
            <h2 className={styles.title}>To-Do-List</h2>
            <div className={styles.input_div}>
                <input placeholder='Enter a task' type="text" id="taskInput" className={styles.task_input}/>
                <button onClick={handleAddChange} className={styles.add_button}>Add</button>

            </div>
            
            <div className={styles.output_div}>
                <ol className={styles.ordList}>
                    {tasks.map((task, index) => <li key={index} className={styles.task_list}>
                                                    <span className={styles.task_span}>{task}</span>
                                                    <button onClick={() => handleRemoveChange(index)} className={styles.delete_button}>❌</button>
                                                    <button onClick={() => moveTaskUp(index)} className={styles.up_button}>🔼</button>
                                                    <button onClick={() => moveTaskDown(index)} className={styles.down_button}>🔽</button>

                                                </li>)}
                </ol>
                
            </div> 
        </div>
    );

//////////////////////////////////////////////

}

export default ToDoList;