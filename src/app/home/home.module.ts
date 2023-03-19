import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InfoComponent } from '../info/info.component';
import { SharedModule } from '../core/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, InfoComponent]
})
export class HomePageModule {}
