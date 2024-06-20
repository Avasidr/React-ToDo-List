import React, {useState} from "react";

//include images into your bundle




//create your first component
const Home = () => {
	const [inputTask, setInputTask] = useState("")
	const [task, setTask] = useState([
        { description: "Go to internship", checked: false },
        { description: "Bother Juanjo", checked: false }
    ]);
	const handleDelete = (index) => {
		setTask(task.filter((data, i)=> i !== index))
		};
	const checkTask = (index) => {
		const newTask = [...task]
		newTask[index].checked = !newTask[index].checked
		setTask(newTask)
	}

	return (
		<div className="container">
			<h1>My Tasks List</h1>
			<ul>
				<li>
					<input 
					type="text" 
					placeholder="New task" 
					onChange={(e) => setInputTask(e.target.value)}
					value={inputTask}
					onKeyDown={(e) => {
						if (e.key === "Enter"){
							setTask([...task, inputTask]);
							setInputTask("")
						}
					}}
					>
					</input>
				</li>
				{task.map((tarea, index) => (
					<li key={index} onClick={() => checkTask(index)}>
						<span className={tarea.checked ? "check" : ""}>{tarea.description}</span>
						<i className="fas fa-times icon" onClick={() => handleDelete(index)} id="notChecked"></i>
					</li>
				))}
			</ul>
			<div className="counter">{task.length} tasks</div>
		</div>
	);
};

export default Home;
