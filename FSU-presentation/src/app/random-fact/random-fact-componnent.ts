import { Component } from '@angular/core';
import { FactService } from './random-fact.service';

@Component({
  selector: 'app-random-fact',
  templateUrl: './random-fact.component.html',
  styleUrls: ['./random-fact.component.css']
})
export class RandomFactComponent {

  factArray = [];

  increment = 0;

  constructor(private factService: FactService) {}

  onSubmit() {
    this.increment++;
    this.factService.getFact()
        .subscribe(data => this.factArray = data);
  }

  onDelete() {
    this.factArray = [];
  }
}
