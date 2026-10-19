"use client";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useRef } from "react";
export type Filter = "All work" | "Mobile apps" | "Web platforms";
const slice = createSlice({
  name: "portfolio",
  initialState: { filter: "All work" as Filter },
  reducers: {
    setFilter: (s, a: PayloadAction<Filter>) => {
      s.filter = a.payload;
    },
  },
});
export const { setFilter } = slice.actions;
const makeStore = () =>
  configureStore({ reducer: { portfolio: slice.reducer } });
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<ReturnType<typeof makeStore> | null>(null);
  if (!ref.current) ref.current = makeStore();
  return <Provider store={ref.current}>{children}</Provider>;
}
