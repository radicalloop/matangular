import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { BaseChartDirective  }  from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  
  @ViewChild("lineChart") lineChart: BaseChartDirective;
  @ViewChild("pieChart") pieChart: BaseChartDirective;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.changeThemeSource$.subscribe(() => {     
      this.lineChart.options.legend.labels.fontColor = this.themeService.activatedTheme.chartLabelColor;
      this.lineChart.ngOnInit();

      this.pieChart.options.legend.labels.fontColor = this.themeService.activatedTheme.chartLabelColor;
      this.pieChart.ngOnInit();

    });
  }

  public lineChartOptions:any = {
    legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: this.themeService.activatedTheme.chartLabelColor
          }
      }        
  };
  
  public pieChartOptions:any = {
    legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: this.themeService.activatedTheme.chartLabelColor
          }
      }        
  };
  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    //console.log(this.themeService.activatedTheme.chartLabelColor);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
