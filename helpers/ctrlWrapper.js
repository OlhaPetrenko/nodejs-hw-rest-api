const crtlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = crtlWrapper;
