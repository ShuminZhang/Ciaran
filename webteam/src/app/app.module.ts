import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ElModule } from 'element-angular'; 
import { QuillModule } from 'ngx-quill';
import { ForgetComponent } from './core/forget/forget.component';
import { LoginComponent } from './core/login/login.component';
import { RegistComponent } from './core/regist/regist.component';
import { StartComponent } from './core/start/start.component';
import { RaceComponent } from './core/race/race.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ForgetComponent,
    LoginComponent,
    RegistComponent,
    StartComponent,
    RaceComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ElModule.forRoot(),
    BrowserAnimationsModule,
    QuillModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
