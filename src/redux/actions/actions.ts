export const addItem = (data: string) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteItem = (id: string) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
