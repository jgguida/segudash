import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Segu Residencial',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Segu Auto',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Segu Vida',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Segu Viagem',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Segu Saúde',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Segu Auto',
      y: 47,
      sliced: true,
      selected: true
    }, {
      name: 'Segu Vida',
      y: 31
    }, {
      name: 'Segu Residencia',
      y: 10.85
    }, {
      name: 'Segu Viagem',
      y: 4.67
    }, {
      name: 'Segu Saude',
      y: 4.18
    }];
  }
}
