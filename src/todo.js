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
				addTask.innerHTML += `<il class="py-4 flex justify-between items-center" id=${task.id}>
							<span class="text-lg font-mediun text-blue-500">${task.name}</span>
							<div class="flex">
								<button class="text-white rounded-md px-2 py-1 mr-2">✅</button>
								<button class="text-white rounded-md px-2 py-1" onclick=deleteTaskFromStorage(${task.id})>❌</button>
							</div>
						</il>
				`;
			});
		}
	}
}
