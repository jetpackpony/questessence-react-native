
export default ({ getState }) => (next) => (action) => {
  if (action.updatingProgress) {
    return next({
      ...action,
      timestamp: Date.now()
    });
  } else {
    return next(action);
  }
};
