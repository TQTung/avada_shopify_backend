import * as yup from "yup";

const todoInputArrNumberMiddleware = async (ctx, next) => {
  try {
    const { ids } = ctx.request.body;
    let schema = yup.array().of(yup.number());
    await schema.validate(ids);
    next();
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: error.errors,
      errorName: error.name,
    };
  }
};

export default todoInputArrNumberMiddleware;
