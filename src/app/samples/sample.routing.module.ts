import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TimeseriesdataComponent} from '../samples/timeseriesdata/timeseriesdata.component'
import { from } from 'rxjs';
const routes: Routes = [
    {
        path: 'TimeSeriesData',
        component: TimeseriesdataComponent,
        children: [
            {
                path: 'list',
                component: TimeseriesdataComponent
             },
            // {
            //     path: 'detail',
            //     component: StudentDetailComponent
            // }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }