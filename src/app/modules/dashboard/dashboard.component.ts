import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'AMARO ANTONIO VIEIRA', weight: 1, symbol: 'H' },
  { position: 2, name: 'CLEBER FERNANDES CARDOSO', weight: 4, symbol: 'H' },
  { position: 3, name: 'ARLINDO AUZIER', weight: 6, symbol: 'H' },
  { position: 4, name: 'ODETE SEMIENTCOSCKI', weight: 4, symbol: 'F' },
  { position: 5, name: 'ANTONIO COELHO DE CARVALHO', weight: 1, symbol: 'H' },
  { position: 6, name: 'DOUGLAS WASHINGTON GOMES DE ARAUJO', weight: 2, symbol: 'H' },
  { position: 7, name: 'ROSA FERNANDES CARDOSO', weight: 1, symbol: 'H' },
  { position: 8, name: 'LUIZ CARLOS FERNANDES CARDOSO', weight: 5, symbol: 'H' },
  { position: 9, name: 'DAMACENO DE GIRAO', weight: 1, symbol: 'H' },
  { position: 10, name: 'ANTERO RODRIGUES', weight: 1, symbol: 'H' },
  { position: 11, name: 'ANTONINA VALERIANA', weight: 1, symbol: 'F' },
  { position: 12, name: 'ANTONIO COELHO DE CARVALHO', weight: 4, symbol: 'H' },
  { position: 13, name: 'DOUGLAS WASHINGTON GOMES DE ARAUJO', weight: 4, symbol: 'H' },
  { position: 14, name: 'MANUEL VELHO MOREIRA', weight: 1, symbol: 'H' },
  { position: 15, name: 'IRNEIDE NAZARE GUERREIRO', weight: 4, symbol: 'F' },
  { position: 16, name: 'GUILHERME WEEGE', weight: 1, symbol: 'H' },
  { position: 17, name: 'ANTONIO ALVES WEEGE', weight: 3, symbol: 'H' },
  { position: 18, name: 'MANUEL MOREIRA', weight: 1, symbol: 'H' },
  { position: 19, name: 'DAMACENO ANTERO MOREIRA', weight: 1, symbol: 'H' },
  { position: 20, name: 'DOUGLAS MANUEL MOREIRA', weight: 1, symbol: 'H' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
