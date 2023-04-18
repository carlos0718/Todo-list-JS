let inputTask = document.querySelector("#input-task");
let clearInput = document.querySelector("#clear-input");
let addTask = document.querySelector("#add-task");
let remove;
let id = 0;
let taskStorage = JSON.parse(localStorage.getItem("todo")) || [];

class Todo {
	constructor() {
		this.name = name;
		this.id = id;
	}

	saveToStorage(name, id) {
		const task = new Todo();
		task.id = id;
		task.name = name;

		taskStorage.push(task);
		console.log(task.name);
		localStorage.setItem("todo", JSON.stringify(taskStorage));

		addTask.innerHTML = "";
		this.readFromStorage();
	}

	readFromStorage() {
		if (taskStorage.length > 0) {
			taskStorage.forEach((task) => {
				addTask.innerHTML += `<li class="py-4 flex justify-between items-center" id=${task.id}>
							<span class="text-lg font-mediun text-blue-500">${task.name}</span>
							<div class="flex">
								<button class="text-white rounded-md px-2 py-1 mr-2">✅</button>
								<button class="text-white rounded-md px-2 py-1" onclick=deleteTaskFromStorage(${task.id})>❌</button>
							</div>
						</li>
				`;
			});
		}
	}
}

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