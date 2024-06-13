export default (err, res) => {
  console.log(err);
  return res.status(500).json({ error: "Server error" });
};
