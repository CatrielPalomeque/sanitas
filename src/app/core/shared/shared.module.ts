import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongPressDirective } from '../directives/long-press.directive';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [FilterPipe,
                 LongPressDirective
                ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ScrollingModule
  ],
  exports: [
    IonicModule,
    FormsModule,
    ScrollingModule,
    FilterPipe,
    LongPressDirective
  ]
})
export class SharedModule { }
