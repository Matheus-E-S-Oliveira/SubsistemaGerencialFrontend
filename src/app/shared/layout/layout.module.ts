import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxMaskDirective } from 'ngx-mask';

import { AngularMaterialModule } from '../modules/angular-material.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutMenuLateralComponent } from './layout-menu-lateral/layout-menu-lateral.component';
import { HomeModule } from '../../features/home/home.module';
import { ClientesModule } from '../../features/clientes/clientes.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutMenuLateralComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    LayoutPageComponent,
  ]
})
export class LayoutModule { }
