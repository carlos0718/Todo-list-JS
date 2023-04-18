let inputTask = document.querySelector("#input-task");
let clearInput = document.querySelector("#clear-input");
let addTask = document.querySelector("#add-task");
let remove;
let id = 0;
let taskStorage = JSON.parse(localStorage.getItem("todo")) || [];



const todo = new Todo();

inputTask.addEventListener("keyup", (event) => {
	if (event.keyCode === 13 && inputTask.value !== "") {
		event.preventDefault();
		id++;
		todo.saveToStorage(inputTask.value, id);
	}
});

todo.readFromStorage();

clearInput?.addEventListener("click", () => {
	inputTask.value = "";
});

function deleteTaskFromStorage(id) {
	taskStorage.forEach((task) => {
		if (task.id === id && taskStorage.length > 0) {
			taskStorage.splice(taskStorage.indexOf(task), 1);
			localStorage.setItem("todo", JSON.stringify(taskStorage));
			addTask.innerHTML = "";
			todo.readFromStorage();
		}
		else
			localStorage.removeItem("todo");
	});
}