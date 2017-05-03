import { Injectable } from '@angular/core';

import { Lifeform } from './lifeform';
import { MOCK_LIFEFORMS } from './mock-lifeforms';

@Injectable()
export class LifeformService {

  constructor() { }

  getLifeforms(): Promise<Lifeform[]> {
    return Promise.resolve(MOCK_LIFEFORMS);
  }
}
