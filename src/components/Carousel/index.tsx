import React, { Children, useEffect, useReducer } from "react";
import { DEFAULT_INDEX } from "./constant";
import { CarouselProps, DataType } from "./interface";

const Carousel = (props: CarouselProps) => {
  const { children, scrollShow, loop } = props;
  const childrenCount = Children.count(children);
  const defaultValue: DataType = {
    currentIndex: DEFAULT_INDEX,
    length: childrenCount,
    touchPosition: DEFAULT_INDEX,
  };
  const [carouselState, dispatchState] = useReducer(
    carouselState,
    defaultValue
  )

  const { length, touchPosition, currentIndex } = carouselState;

  useEffect(() => {
    dispatchState({type: SET_LENGTH, val: childrenCount})
  }, [childrenCount])

  const childWidth = document.getElementById("carousel-body")?.children[0]?.clientWidth;

  const next = () => {
    if(currentIndex < length- (scrollShow-1)){
        dispatchState({type: ADD_INDEX, val: 1});
    } else {
        dispatchState({type: SET_INDEX, val: 0});
    }
  }
  const 
  
};
