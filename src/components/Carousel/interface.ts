import { ReactNode } from "react";

export interface CarouselProps {
    children: ReactNode;
    scrollShow: number;
    loop: boolean;
}

export interface DataType {
    currentIndex: number;
    length: number;
    touchPosition: number;
}

export enum CarouselActionType {
    ADD_INDEX = "ADD_INDEX",
    SUB_INDEX = "SUB_INDEX",
    SET_LENGTH = "SET_LENGTH",
    SET_POSITION = "SET_POSITION",
    SET_INDEX = "SET_INDEX"
}

export interface CarouselAction {
    type: CarouselActionType;
    val: number;
}