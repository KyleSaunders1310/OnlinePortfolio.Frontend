import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { CareerPageComponent } from './components/career-page/career-page.component'
import { ProjectsPageComponent } from './components/projects-page/projects-page.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AboutMePageComponent,
        LandingPageComponent,
        CareerPageComponent,
        ProjectsPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
