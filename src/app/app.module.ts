import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { AuthModule } from './services/Auth/auth.module';
import { AdminPageComponent } from 'src/app/pages/admin/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from 'src/app/pages/authenticate/registration/registration.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import * as AuthReducer from "./store/reducers/auth.reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { DishUploadingEffects } from './store/effects/dish.loading.effects';
import { CategoryUploadingEffects } from './store/effects/category.uploading.effects';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    EffectsModule.forRoot([AuthEffects, DishUploadingEffects, CategoryUploadingEffects]),
    StoreModule.forRoot({auth: AuthReducer.authReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
      autoPause: true, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
