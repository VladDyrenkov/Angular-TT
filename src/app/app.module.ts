import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './bloks/header/header.component';
import { FooterComponent } from './bloks/footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketComponent } from './bloks/footer/basket/basket.component';
import { SharedModule } from './bloks/shared/shared.module';
import { AuthModule } from './services/Auth/auth.module';
import { AdminPageComponent } from './bloks/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/Auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
