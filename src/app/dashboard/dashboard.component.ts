import { Component, OnInit } from '@angular/core';

import { LifeformService } from '../lifeform.service';

import { Lifeform } from '../lifeform';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lifeforms: Lifeform[] = [];

  constructor(private lifeformService: LifeformService) { }

  ngOnInit() {
    this.lifeformService.getLifeforms().then(lifeforms =>
      this.lifeforms = lifeforms.slice(0,4)
    );
  }


}
