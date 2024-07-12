import { CounterState } from "./counter/counter.reducer";

// Maintains global app state
export interface AppState {
  counter: CounterState
 // cart: CartState
}
