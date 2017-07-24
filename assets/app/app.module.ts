import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./components/app/app.component";
import { MessageComponent } from "./components/messages/message.component";
import { MessageListComponent } from "./components/messages/message-list.component";
import { MessageInputComponent } from "./components/messages/message-input.component";
import {MessageService} from "./components/messages/message.service";
import {MessagesComponent} from "./components/messages/messages.component";
import {AuthenticationComponent} from "./components/auth/authentication.component";
import {routing} from "./components/app/routes";
import {HeaderComponent} from "./components/app/header.component";
import {LogoutComponent} from "./components/auth/logout.component";
import {SigninComponent} from "./components/auth/signin.component";
import {SignupComponent} from "./components/auth/signup.component";
import {AuthenticationService} from "./components/auth/authentication.service";
import {ErrorComponent} from "./components/errors/error.component";
import {ErrorService} from "./components/errors/error.service";
import {MessageModule} from "./components/messages/messages.module";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent

    ],
    imports: [
        BrowserModule,
        MessageModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    providers: [
        ErrorService,
        MessageService,
        AuthenticationService],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {

}