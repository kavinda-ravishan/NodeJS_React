exports.hello = (req, res) => {
  res.json({
    hello: ["Hello", "From", "NodeJS"],
  });
};
