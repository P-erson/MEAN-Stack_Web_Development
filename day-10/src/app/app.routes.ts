import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { BrowsePage } from './browse-page/browse-page';
import { ContactUsPage } from './contact-us-page/contact-us-page';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePage},
    {path: 'browse', component: BrowsePage},
    {path: 'about', component: AboutPage},
    {path: 'contactus', component: ContactUsPage}
];
