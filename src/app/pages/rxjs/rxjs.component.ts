import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``,
})
export class RxjsComponent implements OnInit, OnDestroy {
  private subscriptionObservable: Subscription = new Subscription();
  private subscriptionInterval: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    // this.subscriptionObservable = this.returnObservable()
    //   .pipe(retry(1))
    //   .subscribe({
    //     next: (value) => console.log('Subs', value),
    //     error: (error) => console.error('Error', error),
    //     complete: () => console.log('Complete'),
    //   });
    this.subscriptionInterval = this.returnInterval().subscribe({
      next: (value) => console.log('Subs', value),
      error: (error) => console.error('Error', error),
      complete: () => console.log('Complete')
    });
  }

  ngOnDestroy(): void {
    // this.subscriptionObservable.unsubscribe();
    this.subscriptionInterval.unsubscribe();
  }

  returnObservable(): Observable<number> {
    let i = 0;
    return new Observable((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i is 2');
        }
      }, 1000);
    });
  }

  returnInterval(): Observable<number> {
    return interval(1000)
      .pipe(take(4))
      .pipe(map((value) => value + 1));
  }
}
