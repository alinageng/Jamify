import { createSlice } from "@reduxjs/toolkit";

/**
 * TaggedItem is
 * {
 *   createdBy
 *   spotifyId
 *   spotifyLink
 *   releaseDate
 *   imageLink
 *   taggedItemType ("Album, "Playlist, "Track")
 *   title
 * }
 */
const initialState = {
  taggedItem: null,
  results: null,
  description: "",
  searchTerm: "",
}

const taggedItemSlice = createSlice ({
  name: "taggedItem",
  initialState,
  reducers: {
    setTaggedItem(state, action) {
      state.taggedItem = action.payload;
      console.log("setting tagged item: ", state.taggedItem);
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    clearTaggedItem(state, action) {
      state.taggedItem = null;
    },
    clearResults(state, action) {
      state.results = null;
    },
    clearDescription(state, action) {
      state.description = null;
    },
    clearSearchTerm(state, action) {
      state.searchTerm = null;
    },
  }
})

export const { setTaggedItem , setResults,
  clearResults, clearTaggedItem,
  setDescription, clearDescription,
  setSearchTerm, clearSearchTerm } = taggedItemSlice.actions;
export default taggedItemSlice.reducer;