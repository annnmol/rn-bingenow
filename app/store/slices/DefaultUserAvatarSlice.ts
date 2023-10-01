import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Props {
  defaultUserAvatars: any[];
}

let INITIAL_STATE: Props = {
  defaultUserAvatars: [],
};

const DefaultUserAvatarSlice = createSlice({
  name: "DefaultUserAvatarSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setDefaultUserAvatars(state, { payload }: PayloadAction<any>) {
      state.defaultUserAvatars = payload;
    },
    reoveDefaultUserAvatars(state, { payload }: PayloadAction<any>) {
      state.defaultUserAvatars = INITIAL_STATE.defaultUserAvatars;
    },
  },
});

export default DefaultUserAvatarSlice.reducer;

export const { setDefaultUserAvatars, reoveDefaultUserAvatars } =
  DefaultUserAvatarSlice.actions;

export const useDefaultUserAvatarStore = (state: RootState) => state.currentDefaultUserAvatars;
