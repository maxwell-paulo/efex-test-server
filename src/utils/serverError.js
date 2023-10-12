const handleServerError = (res) => {
  return res.status(500).json({ message: "Internal server error." });
};

export default handleServerError;
