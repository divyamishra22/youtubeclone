import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootdispatch, rootstate } from "../reducers";

export const useAppDispatch: ()=> rootdispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootstate > = useSelector;