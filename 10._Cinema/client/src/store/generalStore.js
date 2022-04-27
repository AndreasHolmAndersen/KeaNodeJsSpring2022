import {writable} from "svelte/store";

export const baseURL = writable("http://localhost:3000");
export const movies = writable({});