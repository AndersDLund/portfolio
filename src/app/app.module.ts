import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { MostRecentPositionComponent } from './shared/components/most-recent-position/most-recent-position.component';
import { CertificatesComponent } from './shared/components/certificates/certificates.component';
import { TechStackComponent } from './shared/components/tech-stack/tech-stack.component';
import { SocialMediaComponent } from './shared/components/social-media/social-media.component';
import { HookComponent } from './shared/components/hook/hook.component';
import { HobbiesComponent } from './shared/components/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ExperienceComponent,
    MostRecentPositionComponent,
    CertificatesComponent,
    TechStackComponent,
    SocialMediaComponent,
    HookComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    HttpClientModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
