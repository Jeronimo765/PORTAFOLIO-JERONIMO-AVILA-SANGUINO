import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './shared/components/navbar/navbar.component';
import { ScrollAnimationDirective } from './shared/directives/scroll-animation.directive';
import { HeroComponent }        from './features/hero/hero.component';
import { AboutComponent }       from './features/about/about.component';
import { StackComponent }       from './features/stack/stack.component';
import { ProjectsComponent }    from './features/projects/projects.component';
import { ExperienceComponent }  from './features/experience/experience.component';
import { ContactComponent }     from './features/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrollAnimationDirective,
    HeroComponent,
    AboutComponent,
    StackComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
