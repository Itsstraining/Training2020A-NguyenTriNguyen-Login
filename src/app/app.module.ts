import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HomeRoutingModule} from '../app/home/home-routing.module'

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {SignUpComponent} from '../app/sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';

// Firebase
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';









@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    SignUpComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeRoutingModule,

    // Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
  


  //FireBase
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
 
    
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    

  ]
})
export class AppModule { }
