import { Injectable } from '@angular/core';

import { Lifeform } from './lifeform';
import { MOCK_LIFEFORMS } from './mock-lifeforms';

@Injectable()
export class LifeformService {

  constructor() { }

  getLifeform(id: number): Promise<Lifeform> {
    return this.getLifeforms()
      .then(lifeforms => lifeforms.find(lifeform => lifeform.id === id));
  }

  getLifeforms(): Promise<Lifeform[]> {
    return Promise.resolve(MOCK_LIFEFORMS);
  }

}
