import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MovieActions } from "../actions/movie.actions";
import { NowPlayingSearchOptions, SearchResults } from "../models/themoviedb";
import { AppState } from "../reducers";

const api_key = "431a59ce91710d2d84564d46c0e65729";
const baseUrl = "https://api.themoviedb.org/3";

@Injectable({
    providedIn: "root"
})
export class MovieService {
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
    ) { }

    private url(url) {
        return `${baseUrl}/${url}`;
    }

    /**
     * Returns an observable of movies that are now playing.
     */
    getNowPlaying(request: NowPlayingSearchOptions) {
        request = Object.assign(
            {},
            {
                api_key,
                include_adult: "false",
            } as NowPlayingSearchOptions,
            request
        );

        return this.http.get<SearchResults>(this.url("movie/now_playing"), { params: request });
    }
}
