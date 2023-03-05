import { CarouselAction, DataType, CarouselActionType } from "./interface";
export const carouselReducer = (state: DataType, action: CarouselAction) => {
  const { ADD_INDEX, SUB_INDEX, SET_LENGTH, SET_POSITION, SET_INDEX } =
    CarouselActionType;

  switch (action.type) {
    case ADD_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex + action.val,
      };
    case SUB_INDEX:
        
  }
};
