import joi from "joi";

const validateData = (schema) => async (req, res, next) => {
  let validated;
  if (typeof req.body === "Array") {
    validated = joi.array().items(schema).validate(req.body);
  } else {
    validated = schema.validate(req.body, { abortEarly: false });
  }
  if (validated.error) {
    const errorMessages = validated.error.details.map((err) => err.message);
    return res.status(400).json([...errorMessages]);
  }
  next();
};

export default validateData;
