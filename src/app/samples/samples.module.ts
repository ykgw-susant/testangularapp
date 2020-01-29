import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeseriesdataComponent } from './timeseriesdata/timeseriesdata.component';
import {SampleRoutingModule} from '../samples/sample.routing.module'


@NgModule({
  declarations: [TimeseriesdataComponent],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SamplesModule { }
