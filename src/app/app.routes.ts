import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { StudioComponent } from './studio/studio.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ProfileComponent } from './profile/profile.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { BagComponent } from './bag/bag.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Login2Component } from './login-2/login-2.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'men', component:MenComponent},
    {path:'women', component:WomenComponent},
    {path:'kids', component:KidsComponent},
    {path:'home-living', component:HomeLivingComponent},
    {path:'Beauty', component:BeautyComponent},
    {path:'studio', component:StudioComponent},
    {path:'profile', component:ProfileComponent},
    {path:'whishlist', component:WhishlistComponent},
    {path:'bag', component:BagComponent},
    {path:'login', component:LoginComponent},
    {path:'login-2', component:Login2Component},
    {path:'sign-up', component:SignUpComponent},
    {path:'user-dashboard', component:UserDashboardComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent}

];
