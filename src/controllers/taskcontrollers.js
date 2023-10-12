import { createdTask } from "../repositories/taskRepository.js";

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

export { createTask };
