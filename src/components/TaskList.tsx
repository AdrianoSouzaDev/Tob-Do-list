import { Trash } from 'phosphor-react';

import styles from './TaskList.module.css'

export interface TaskType {
    id: number;
    description: string;
    completed: boolean;
}

interface taskProps {
    task: TaskType;
    onCompleteTask: (task: TaskType) => void;
    onDeleteTask: (task: TaskType) => void;
}

export const TaskList = ({ task, onCompleteTask, onDeleteTask }: taskProps) => {

    const handleCompleteTask = () => {
        onCompleteTask(task)
    }

    const handleDeleteTask = () => {
        onDeleteTask(task)
    }

    return (
        <li>
            <label className={styles.container}>
                <input type='checkbox' defaultChecked={task.completed} onChange={handleCompleteTask} />
                <span className={styles.checkmark}></span>
            </label>

            <span>{task.description}</span>
            
            <button onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>

        </li>
    )
}