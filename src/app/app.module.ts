import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { FlexComponent } from './flex/flex.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes = [
  {path: 'page/1', component: PageComponent},
  {path: 'page/2', component: Page2Component},
  {path: 'page/3', component: ContactFormComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    CardComponent,
    PageComponent,
    Page2Component,
    HomeComponent,
    FlexComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
