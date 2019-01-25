import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
import { ResultFormsComponent } from './result-forms/result-forms.component';

export const appRoutes: Routes = [
    {
        path: 'register', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
      path: 'home', component: HomeComponent,
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
      path: 'resultforms/:titre', component: ResultFormsComponent, canActivate: [AuthGuard]
  },
    {
        path: 'creerquestionnaire', component: EditFormsComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
