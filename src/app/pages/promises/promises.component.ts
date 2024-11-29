import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: ``,
})
export class PromisesComponent implements OnInit {
  public ngOnInit(): void {
    this.getUsers().then(console.log);
  }

  public getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then(body => resolve(body.data))
        .catch(reject);
    });
  }
}
