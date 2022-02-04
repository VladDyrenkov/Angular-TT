// import { createSelector } from "@ngrx/store";
// import { AppState } from "../app.state";
// import { ICategory } from "../interface/category.interface";
// import { IDish } from "../interface/dish.interface";
// import { ICategoryState } from "../state/category.state";
// import { IDishState } from "../state/dish.uploading.state";

// export const uploadedDish = ( state: AppState) => state.dishState;
// export const uploadedCategories = ( state: AppState) => state.categoryState;

// export const filteredDish = createSelector(
//   uploadedDish,
//   uploadedCategories,
//   (uploadedDish: IDishState, uploadedCategories: ICategoryState, props: string) => {
//     const idForFilter = uploadedCategories.categories.find((category: ICategory) => category.url === props)?.id || '';
//     return uploadedDish.dish.filter((dish: IDish) => dish.category.includes(idForFilter));
//   }
// )