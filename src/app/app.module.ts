import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt'; 
import localePtExtra from '@angular/common/locales/extra/pt'; 

import { provideNgxMask } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './shared/layout/layout.module';

import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  exports: [],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideHttpClient(
      withFetch(),
    ),
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
