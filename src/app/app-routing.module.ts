import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {ContentSettingsComponent} from "./content-settings/content-settings.component";
import {ContentSigninComponent} from "./content-signin/content-signin.component";

const routes: Routes = [
  {path: "",redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ContentComponent},
  {path: "settings", component: ContentSettingsComponent},
  {path: "signin", component: ContentSigninComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
