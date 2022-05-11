import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionComponent } from './opcion/opcion.component';
import { PanelComponent } from './panel/panel.component';
import { PanelDeclarativoComponent } from './panel-declarativo/panel-declarativo.component';
import { PanelBasadoComponent } from './panel-basado/panel-basado.component';
import { PanelAprendeComponent } from './panel-aprende/panel-aprende.component';
import { CloseComponent } from './close/close.component';
import { TableComponent } from './table/table.component';
import { TablecontainerComponent } from './tablecontainer/tablecontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionComponent,
    PanelComponent,
    PanelDeclarativoComponent,
    PanelBasadoComponent,
    PanelAprendeComponent,
    CloseComponent,
    TableComponent,
    TablecontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
