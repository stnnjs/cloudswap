export const createAction = (action: string, payload: { [key: string]: any }) => ({ type: action, ...payload });
