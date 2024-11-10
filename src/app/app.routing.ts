import { Route } from "@angular/router";
import { AppComponent } from "./app.component";

export const appRoute: Route[] = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../app/modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        pathMatch: 'full',
        redirectTo: 'dashboard',
        path: '',
      },
    ]

  }
]
