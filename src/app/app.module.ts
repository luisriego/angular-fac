import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from './app.routes';

// Providers ou Services
import { CandidatosService } from './providers/candidatos.service';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { SaudeComponent } from './components/saude/saude.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    SaudeComponent,
    ConfirmacaoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    CandidatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
