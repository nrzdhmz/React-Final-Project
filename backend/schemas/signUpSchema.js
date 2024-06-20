import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  title: joi.string().valid("Mr.", "Mrs.").when("role", {
    is: "customer",
    then: joi.required(),
    otherwise: joi.optional(),
  }),
  firstName: joi.string().optional(),
  lastName: joi.string().optional(),
  role: joi.string().valid("customer", "admin").default("customer"),
});

export default userSchema;
