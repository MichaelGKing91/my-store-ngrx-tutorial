import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ CommonModule, CounterComponent, MatSlideToggleModule ]
})
export class AppComponent {
  title = 'my-store-ngrx-tutorial';

  count$: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount);
  }
}
