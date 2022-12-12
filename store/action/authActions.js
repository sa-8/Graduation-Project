export const AUTH_CHANGED = "AUTH_CHANGED";

export const authChanged = (status) => {
  return { type: AUTH_CHANGED, payload: status };
};
