import { createSlice } from "@reduxjs/toolkit";
import { productsData as rawProductsData } from "../../../data/db";

// localStorage'dan like qilingan mahsulotlar ro‘yxatini olish
const likedIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");

// Har bir mahsulotga localStorage'dagi like holatini qo‘llash
const productsData = rawProductsData.map((product) => ({
  ...product,
  like: likedIds.includes(product._id),
}));

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

    toggleLike(state, action) {
      const productId = action.payload;
      const product = state.allProducts.find((p) => p._id === productId);

      if (product) {
        product.like = !product.like;

        // filteredProducts ichidagi mos mahsulotni yangilash
        const filteredProduct = state.filteredProducts.find(
          (p) => p._id === productId
        );
        if (filteredProduct) {
          filteredProduct.like = product.like;
        }

        // localStorage yangilash
        const likedIds = JSON.parse(
          localStorage.getItem("likedProducts") || "[]"
        );

        if (product.like) {
          if (!likedIds.includes(productId)) {
            localStorage.setItem(
              "likedProducts",
              JSON.stringify([...likedIds, productId])
            );
          }
        } else {
          const updatedLikes = likedIds.filter((id) => id !== productId);
          localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
        }
      }
    },
  },
});

export const { setSearchQuery, setCurrentPage, setCategoryFilter, toggleLike } =
  productSlice.actions;

export default productSlice.reducer;
