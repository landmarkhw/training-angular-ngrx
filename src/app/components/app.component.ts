import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Observable, of, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { MovieActions } from "../actions/movie.actions";
import { SearchResult } from "../models/themoviedb";
import { AppState } from "../reducers";
import { getSelectedMovie } from "../selectors/movie.selectors";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    // This fixes an animation glitch where, when the movie is deselected,
    // the movie-details are immediately blanked out.  Note that this is done
    // in this file because this is where the 1000ms animation delay is established.
    selectedMovieDelayed$: Observable<SearchResult>;
    selectedMovie$: Observable<SearchResult>;

    constructor(
        private dialog: MatDialog,
        private store: Store<AppState>,
    ) {
        this.selectedMovie$ = this.store.select(getSelectedMovie);
        this.selectedMovieDelayed$ = this.selectedMovie$.pipe(
            // Switch the movie immediately when selected,
            // but delay 1000ms when unselected
            switchMap(movie => movie ? of(movie) : timer(1000).pipe(map(() => movie)))
        );
    }

    handleClose() {
        this.store.dispatch(MovieActions.select(null));
    }
}
