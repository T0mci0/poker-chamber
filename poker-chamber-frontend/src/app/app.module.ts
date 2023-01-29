import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokerDashboardComponent } from './components/poker-dashboard/poker-dashboard.component';

@NgModule({
    declarations: [AppComponent, PokerDashboardComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
