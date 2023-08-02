import styles from './TasksInfo.module.css';

interface TaskInfoProps {
    amountTask: number;
    completedTask: number
}
export const TasksInfo = ({ amountTask, completedTask }: TaskInfoProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.createdTasks}>
                <strong>Tarefas criadas</strong>
                <span>{amountTask}</span>
            </div>

            <div className={styles.completedTasks}>
                <strong>Concluídas</strong>
                <span>{completedTask}</span>
            </div>
        </div>
    );
}