import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilesListingComponent } from './files-listing/files-listing.component';
import { FilesService } from "../shared/files.service";
import { TreeItemComponent } from './tree-item/tree-item.component';


const route=[
      {path:' ', redirectTo: 'filsList', pathMatch:'full'},
      {path:'filsList', component: FilesListingComponent},
      {path:'**', redirectTo: 'filsList', pathMatch:'full'}
    ];

@NgModule({
  declarations: [
    AppComponent,
    FilesListingComponent,
    TreeItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpModule,
    FormsModule 
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
