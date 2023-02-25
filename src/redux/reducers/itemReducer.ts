export interface stateTypes {
  list: string[];
}

const initialState: stateTypes = {
  list: [],
};

export const itemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_ITEM":
      const newList = state.list.filter((elem: any) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_ALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
