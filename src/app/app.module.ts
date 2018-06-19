import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppListComponent }  from '../component/App-List/applist.component';
import { ServersComponent }  from '../component/Servers/servers.component';
import { DataService } from '../component/services/DataService';
import { YesNoComponent } from '../component/App-YesNo/yesno.component';




@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    ServersComponent,
    YesNoComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
