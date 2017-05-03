import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import '../../../node_modules/rxjs/add/operator/switchMap';

import { Lifeform } from '../lifeform';

import { LifeformService } from '../lifeform.service';

@Component({
  selector: 'lifeform-stats',
  templateUrl: './lifeform-stats.component.html',
  styleUrls: ['./lifeform-stats.component.css']
})
export class LifeformStatsComponent implements OnInit {
  @Input() lifeform: Lifeform;

  constructor(
    private lifeformService: LifeformService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.lifeformService.getLifeform(+params['id']))
      .subscribe(lifeform => this.lifeform = lifeform);
  }
  
  goBack(): void {
    this.location.back();
  }

}
