import { create } from "zustand";
import { produce } from "immer";

// Define the cart item type
type CartItem = {
  quantity: number;
  productId: number;
};

// Define the state type
export type State = {
  cart: CartItem[];
};

// Define the actions for the store
export type Actions = {
  addToCart: (productId: number) => void; // Change productId type to number to match CartItem
  reset: () => void;
  deleteFromCart: (productId: number) => void;
};

// Initial state for the store
const initialState: State = {
  cart: [],
};

// Zustand store definition with immer
export const useCartStore = create<State & Actions>((set, get) => ({
  ...initialState,

  addToCart: (productId: number) => {
    set(
      produce((state: State) => {
        const findIndex = state.cart.findIndex(
          (item) => item.productId === productId
        );

        if (findIndex !== -1) {
          // If the product exists, increment the quantity
          state.cart[findIndex].quantity += 1;
        } else {
          // If the product doesn't exist, add it with quantity 1
          state.cart.push({ productId, quantity: 1 });
        }
      })
    );
  },

  deleteFromCart: (productId: number) => {
    set(
      produce((state: State) => {
        // Filter out the item with the specified productId
        state.cart = state.cart.filter((item) => item.productId !== productId);
      })
    );
  },

  reset: () => {
    set(initialState);
  },
}));
