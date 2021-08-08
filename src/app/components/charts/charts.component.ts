import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


  @Input('my-id') myId = '';
  @Input('type') type = 'bar';

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() : void {
    new Chart(this.myId, {
      type: this.type,
      data: {
          labels: ['Homme', 'Femme', 'Enfant'],
          datasets: [{
              label: 'Clear',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 127, 127)',
                  'rgba(64,224,208)',
                  'rgba(255,255,224)'
                  // 'rgba(75, 192, 192, 0.2)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(220,20,60)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
