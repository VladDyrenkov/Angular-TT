import { uploadCategorySave, uploadingCategory } from "../actions/category.uploading.actions";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, EMPTY } from "rxjs";
import { CategoryService } from "src/app/services/category/category.service";

@Injectable()
export class CategoryUploadingEffects {
  constructor(private action: Actions, private categoryService: CategoryService) {
  }

  categoryUploading$ = createEffect(() => this.action.pipe(
    ofType(uploadingCategory),
    mergeMap(() => this.categoryService.loadCategories()
    .pipe(
      map(category => uploadCategorySave({category})),
      catchError(() => EMPTY)
    ))
  ));
};