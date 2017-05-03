import { Component, OnInit } from '@angular/core';

import { LifeformService } from '../lifeform.service';

import { Lifeform } from '../lifeform';

@Component({
  selector: 'lifeforms',
  templateUrl: './lifeforms.component.html',
  styleUrls: ['./lifeforms.component.css'],
  providers: [LifeformService]
})
export class LifeformsComponent implements OnInit {
  lifeforms: Lifeform[];
  selectedLifeform: Lifeform;

  constructor(private lifeformService: LifeformService) { }

  getLifeforms(): void {
    this.lifeformService.getLifeforms().then(lifeforms => 
      this.lifeforms = lifeforms
    );
  }

  ngOnInit(): void {
    this.getLifeforms();
  }

  onSelect(lifeform: Lifeform): void {
    this.selectedLifeform = lifeform;
  }
}
