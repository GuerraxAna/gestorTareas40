import { renderTask } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const taskInput = document.getElementById("task-input");
            if(taskInput.value !== "") {
                addTask(taskInput.value);

                renderTask();

                document.getElementById("task-input").value = "";
            }
    });
});