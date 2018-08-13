
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent} from "./new/new.component"
import {FormComponent} from "./form/form.component"


export const routes: Routes = [
  { path: "", component: FormComponent },
  { path: "test", component: NewComponent }
  // { path: "dashboard", component: DashboardComponent }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
