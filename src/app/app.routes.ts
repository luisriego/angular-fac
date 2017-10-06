import { RouterModule, Routes } from '@angular/router';
// import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';
import { SaudeComponent } from './components/saude/saude.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

const app_routes: Routes = [
  { path: 'home', component: TemplateComponent },
  { path: 'continuar-matricula/:id', component: SaudeComponent },
  { path: 'confirmacao/:id', component: ConfirmacaoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
