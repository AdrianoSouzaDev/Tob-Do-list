import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react'

import styles from './Task.module.css';

import { PlusCircle } from 'phosphor-react';
import clipboardIcon from "./../assets/Clipboard.svg";

import { TasksInfo } from "./TasksInfo";
import { TaskList, TaskType } from './TaskList';


const task: TaskType[] = [];

export const Task = () => {
    const [tasksList, setTasksList] = React.useState(task)
    const [newTaskText, setNewTaskText] = React.useState('')
    const [amountCompletedTask, setAmountCompletedTask] = React.useState(0)

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault();

        const newTask: TaskType = {
            id: tasksList.length > 0 ? tasksList[tasksList.length - 1].id + 1 : 1,
            description: newTaskText,
            completed: false
        }

        setTasksList([...tasksList, newTask]);
        setNewTaskText('');
    }

    const HandleCalcTaskCompleted = () => {
        const completedTask = tasksList.filter((item) => {
            return item.completed;
        });

        setAmountCompletedTask(completedTask.length);
    }

    const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    const handleCompletedTask = (task: TaskType) => {
        const currentState = tasksList.filter((currentTask) => {
            if (currentTask.id == task.id) {
                task.completed = !task.completed;
            }

            return tasksList;
        });

        setTasksList(currentState);
    }

    const deleteTask = (taskDelete: TaskType) => {
        const deleteWithoutDeletedOne = tasksList.filter(task => {
            return task != taskDelete;
        })

        setTasksList(deleteWithoutDeletedOne);
    }

    const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    React.useEffect(() => {
        HandleCalcTaskCompleted()
    }, [tasksList]);

    return (
        <>
            <article>
                <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
                    <input
                        type="text"
                        required
                        placeholder='Adicione uma nova tarefa'
                        value={newTaskText}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                    />
                    <button>
                        Criar
                        <PlusCircle size={24} />
                    </button>

                </form>

                <TasksInfo amountTask={tasksList.length} completedTask={amountCompletedTask} />
            </article>

            <main className={styles.content}>
                {
                    tasksList.length > 0 ?
                        <>
                            <ul className={styles.contentTasks}>
                                {tasksList.map((taskItem) => {
                                    return (<TaskList key={taskItem.id} task={taskItem} onCompleteTask={handleCompletedTask} onDeleteTask={deleteTask} />)
                                })}
                            </ul>
                        </>
                        :
                        <div className={styles.initState}>
                            <img src={clipboardIcon} />
                            <strong> Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                }
            </main >
        </>
    )
}