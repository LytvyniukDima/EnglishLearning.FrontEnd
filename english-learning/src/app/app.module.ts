import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { TasksModule } from './tasks/tasks.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { StatisticModule } from './statistic/statistic.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    TasksModule,
    MultimediaModule,
    StatisticModule,
    DictionaryModule,
    CourseModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
