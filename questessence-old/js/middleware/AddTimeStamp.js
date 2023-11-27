export default ({ getState }) => (next) => (action) => {
  return next({
    ...action,
    timestamp: Date.now()
  });
};
