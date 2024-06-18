import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email().required(),
  currentPassword: joi.string().required(),
  newPassword: joi.string().required(),
  title: joi.string().valid("Mr.", "Mrs.").required(),
  firstName: joi.string().empty(""),
  lastName: joi.string().empty(""),
});

export default userSchema;
