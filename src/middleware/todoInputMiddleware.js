import * as yup from "yup";

const todoInputMiddleware = async (ctx, next) => {
  try {
    const inputPost = ctx.request.body;
    let schema = yup.object().shape({
      text: yup.string().required(),
      isCompeleted: yup.boolean(),
    });
    await schema.validate(inputPost);
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

export default todoInputMiddleware;
