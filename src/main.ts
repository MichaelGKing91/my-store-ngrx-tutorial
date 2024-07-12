import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appConfig } from './app/app.config';


// Bootstrapping in Angular refers to the process of initializing and starting the Angular application.
// When you bootstrap an Angular application, you are instructing Angular to set up and
// run the application by creating and injecting the necessary dependencies, compiling components, and
// rendering the initial view.
// Bootstrapping in Angular refers to the process of initializing and starting the Angular application.
// When you bootstrap an Angular application, you are instructing Angular to set up and
// run the application by creating and injecting the necessary dependencies, compiling components, and
// rendering the initial view.
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
