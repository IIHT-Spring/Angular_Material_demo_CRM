import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
