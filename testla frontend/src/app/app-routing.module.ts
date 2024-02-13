import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PerformanceComponent } from './performance/performance.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'sustainability', component: SustainabilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
