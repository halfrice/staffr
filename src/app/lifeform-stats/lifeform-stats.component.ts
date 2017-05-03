import { Component, OnInit, Input } from '@angular/core';

import { Lifeform } from '../lifeform';

@Component({
  selector: 'lifeform-stats',
  templateUrl: './lifeform-stats.component.html',
  styleUrls: ['./lifeform-stats.component.css']
})
export class LifeformStatsComponent implements OnInit {
  @Input() lifeform: Lifeform;

  constructor() { }

  ngOnInit() {
  }

}
