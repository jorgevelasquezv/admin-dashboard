import { Component, inject, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'shared-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styles: ``,
})
export class BreadCrumbComponent implements OnDestroy {
  private router: Router = inject(Router);
  private suscribeRouter = new Subscription();
  public title: String = '';

  constructor() {
    this.suscribeRouter = this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .pipe(filter((event) => event.snapshot.firstChild === null))
      .pipe(map((event: ActivationEnd) => event.snapshot.data))
      .subscribe( ({title}) => this.title = title);
  }

  ngOnDestroy(): void {
    this.suscribeRouter.unsubscribe();
  }
}
