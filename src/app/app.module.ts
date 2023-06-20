import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoadingBarComponent } from './shared/loading-bar/loading-bar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
