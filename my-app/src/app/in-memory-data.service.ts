import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'mr.rice' },
      { id: 12, name: 'rice' },
      { id: 13, name: 'jack' },
      { id: 14, name: 'mike' },
      { id: 15, name: 'helen' },
      { id: 16, name: 'barry' },
      { id: 17, name: 'john' },
      { id: 18, name: 'tom' },
      { id: 19, name: 'eric' }
    ];
    return { heroes };
  }
}
