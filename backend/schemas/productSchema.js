import joi from "joi";

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().min(99).max(9999).required(),
  category: joi.string().valid("Men", "Women").required(),
});

export default productSchema;
