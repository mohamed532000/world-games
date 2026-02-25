import { configureStore } from "@reduxjs/toolkit";
import AddToCartWorker from "./AddToCartActions";
import GamesReducer from "./GamesReducer";

export let myStore = configureStore({
    reducer : {
        GamesReducer,
        AddToCartWorker,
    }
});