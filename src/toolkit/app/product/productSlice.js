import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/db";

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  searchQuery: "",
  currentPage: 1,
  productsPerPage: 8,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      const query = action.payload.toLowerCase().trim();
      state.filteredProducts = state.allProducts.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      });
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategoryFilter(state, action) {
      const category = action.payload.toLowerCase();
      const query = state.searchQuery.toLowerCase().trim();

      state.filteredProducts = state.allProducts.filter((product) => {
        const matchesCategory =
          category === "all" || product.category.toLowerCase() === category;
        const matchesQuery =
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);

        return matchesCategory && matchesQuery;
      });

      state.currentPage = 1;
    },
  },
});

export const { setSearchQuery, setCurrentPage, setCategoryFilter } =
  productSlice.actions;
export default productSlice.reducer;
