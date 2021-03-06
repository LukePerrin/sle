import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

let routes = [
    { path: "", component: HomeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent        
    ],
    imports: [
        BrowserModule, //.withServerTransition({ appId: 'ng-cli-universal' }),
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        SlickCarouselModule,
        RouterModule.forRoot(routes, {
            enableTracing: false // for Debugging of the Routes
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
