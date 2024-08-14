import { renderTasks } from "./ui";
import { addTask, deleteTask, updateTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const taskInput = document.getElementById("task-input");
            if(taskInput.value !== "") {
                addTask(taskInput.value);

                renderTasks();

                document.getElementById("task-input").value = "";
            }
    });

    //EVENTO PARA LOS BOTONES
    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
        }
    });
});