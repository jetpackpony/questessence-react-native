
export default ({ getState }) => (next) => (action) => {
  if (action.updatingProgress) {
    console.log("Updating Progress");
    return next({
      ...action,
      timestamp: Date.now()
    });
  } else {
    return next(action);
    console.log("NOT Updating Progress");
  }
};
