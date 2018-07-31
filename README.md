# Training - Angular + ngrx

This is a multipart training workshop, aimed at teaching you basic Angular design principles with ngrx.

We'll be using the following technologies in this workshop:

* Angular
* Angular CLI
* ngrx/store
* ngrx/effects

---------------

### Previous Workshop

This workshop begins where the last workshop left off.  If you haven't already,
I recommend you complete the previous workshop before continuing:
[https://github.com/landmarkhw/training-redux-arch](https://github.com/landmarkhw/training-redux-arch)

## Roadmap

Here's what we'll be trying to accomplish on in this training workshop:

1. Add a user authentication dialog (e.g. login)
1. Add a wait spinner for long-running actions
1. Add form validation on the user authentication dialog
1. Add a user registration dialog

## Part 1

1. Clone this project: `git clone https://github.com/landmarkhw/training-angular-ngrx.git`
1. Checkout the "part1" branch: `git checkout part1`

### How to run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Summary of Changes

I've added new actions and reducer for a new `auth` section of the web site.

See `auth.actions.ts` and `auth.reducer.ts`

### 1. Adding a user authentication dialog

Let's add a dialog that allows the user to enter their username/password and login to the system.  We'll take these steps:

1. Use the Angular CLI schematics to install the @angular/material library:
    * `npm install --save @angular/material @angular/cdk @angular/animations`
    * `ng add @angular/material`
    * Import modules needed for `MatDialog`
1. Use the Angular CLI to create a `AuthenticationDialog` component:
    * `ng generate component components/authentication-dialog`
    * Create a form with username/password inputs and a "Sign In" button.
    * Hook up the form submission to use the new `auth` actions to sign in.
    * Create selectors - `auth.selectors.ts`
        * `getIsAuthenticated()`
        * `getAuthenticatedDisplayName()`

### 2. Add a wait spinner for long-running actions

We didn't get to this during the training.  I'll see if I can add it to the next training schedule.

### 3. Add form validation on the user authentication dialog

We didn't get to this during the training.  I'll see if I can add it to the next training schedule.

### 4. Add a user registration dialog

We didn't get to this during the training.  I'll see if I can add it to the next training schedule.
