import { useContext } from "react";
import { MovieContext } from "./createMovieContext";

export const useMovieContext = () => useContext(MovieContext)
