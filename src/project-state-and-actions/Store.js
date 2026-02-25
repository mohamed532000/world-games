import { configureStore } from "@reduxjs/toolkit";
import AddToCartWorker from "./AddToCartActions";
import GamesReducer from "./GamesReducer";
// import UserAuthWorker from "./AuthReducer";

export let myStore = configureStore({
    reducer : {
        GamesReducer,
        AddToCartWorker,
        // UserAuthWorker
    }
});