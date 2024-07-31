import { getTasks } from "./task";

export const renderTask = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
}