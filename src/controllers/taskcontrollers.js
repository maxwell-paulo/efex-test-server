import {
  createdTask,
  userTasks,
  isDone,
} from "../repositories/taskRepository.js";

const createTask = async (req, res) => {
  const { name, description } = req.body;
  const user_id = req.user.id;
  const descriptionValue = description || "daily task";

  try {
    const newTask = await createdTask({
      name,
      description: descriptionValue,
      user_id,
      done: false,
    });

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const listTasks = async (req, res) => {
  const user_id = req.user.id;

  try {
    const allUserTasks = await userTasks(user_id);

    return res.status(201).json(allUserTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const isTaskDone = async (req, res) => {
  const { id } = req.body;

  try {
    if (!id) {
      return res.status(400).json("task id must be informed");
    }

    await isDone(id);

    return res.status(201).json("Task updated");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { createTask, listTasks, isTaskDone };
