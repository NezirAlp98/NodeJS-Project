const validationMiddleware = (req, res, next) => {
    const { name, age, stillEmployee } = req.body;
  
    if (!isString(name) || !isNumber(age) || !isBoolean(stillEmployee)) {
      return res.status(400).send({ error: "Invalid request body" });
    }
  
    next();
  };
  
  const isString = (value) => typeof value === "string";
  const isNumber = (value) => typeof value === "number";
  const isBoolean = (value) => typeof value === "boolean";
  
  module.exports = validationMiddleware;