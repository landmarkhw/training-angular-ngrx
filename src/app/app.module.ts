import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./components/app.component";
import { AuthenticateDialogComponent } from "./components/authenticate-dialog/authenticate-dialog.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { AuthEffects } from "./effects/auth.effects";
import { MovieEffects } from "./effects/movie.effects";
import { reducers } from "./reducers";
import { AuthService } from "./services/auth.service";
import { MovieService } from "./services/movie.service";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticateDialogComponent,
        MovieDetailsComponent,
        MovieListComponent,
        HeaderComponent,
    ],
    entryComponents: [
        AuthenticateDialogComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        EffectsModule.forRoot([
            AuthEffects,
            MovieEffects,
        ]),
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument(),
    ],
    providers: [
        AuthService,
        MovieService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
