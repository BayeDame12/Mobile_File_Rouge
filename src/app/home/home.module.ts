import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {ConnexionPageModule} from "../connexion/connexion.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ConnexionPageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
