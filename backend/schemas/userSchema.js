import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
  confirmPassword: joi.equal(joi.ref("password")),
  title: joi.string().valid("Mr.", "Mrs."),
  firstName: joi.string().min(4).max(15),
  lastName: joi.string().min(4).max(15),
});

export default userSchema;
