import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./components/app.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieEffects } from "./effects/movie.effects";
import { reducers } from "./reducers";
import { AuthService } from "./services/auth.service";
import { MovieService } from "./services/movie.service";
import { AuthEffects } from "./effects/auth.effects";

@NgModule({
    declarations: [
        AppComponent,
        MovieDetailsComponent,
        MovieListComponent,
    ],
    imports: [
        BrowserModule,
        EffectsModule.forRoot([
            AuthEffects,
            MovieEffects,
        ]),
        HttpClientModule,
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
