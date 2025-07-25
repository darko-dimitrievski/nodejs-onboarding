module.exports.sortedArray = (req, res) => {
  const { strings } = req.body;

  if (!Array.isArray(strings)) {
    return res.status(400).json({ error: 'Input must be an array of strings' });
  }

  const sorted = strings.slice().sort();

  return res.status(200).json({ sorted });
};