import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import ChartsOptions from 'src/app/helpers/chartOptions';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private options: ChartsOptions) {
    this.options.getOptions().subscribe(data => {
      Highcharts.chart('container', data);
    })
  }

  ngOnInit(): void {
    this.options.Options();
  }

}
