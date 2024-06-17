import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.equal(joi.ref("password")),
  title: joi.string().valid("Mr.", "Mrs.").required(),
  firstName: joi.string().min(4).max(15).required(),
  lastName: joi.string().min(4).max(15).required(),
});

export default userSchema;
