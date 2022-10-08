import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { colors } from 'src/app/colors.const';
import { DashboardService } from '../../service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private $textMutedColor = '#82868b';
  private $white = '#fff';
  private $textHeadingColor = '#5e5873';
  private $strokeColor = '#ebe9f1';
  private $earningsStrokeColor2 = '#28c76f66';
  private $earningsStrokeColor3 = '#28c76f33';
  public salesCountForMonth = [];
  public salesCountForWeek = [];
  public salesCountForYear = [];
  public revenueChartOptions;
  public earningsChartOptions;
  public days = 'Select Days';
  public week;
  public month;
  public year;
  public salesChartOptions;
  public data;
  public total;
  public loginType;
  ngOnInit(): void {
    this.loginType = localStorage.getItem('loginType')
    console.log(this.loginType);

    this.totalEarnings();
  }

  totalEarnings() {
    let earnings = 100000;
    this.total = Number(earnings / 145).toFixed(2);
    console.log(this.total);
  }

  salesDataForWeek(event) {
    this.days = event?.target?.innerText;
    this.week = this.dashboardService.lastWeek();
    this.salesCountForWeek.push(this.week._value);
    this.salesChartOptions.series = this.salesCountForWeek;
    this.salesCountForYear.pop();
    this.salesCountForMonth.pop();
  }
  salesDataForMonth(event) {
    this.days = event?.target?.innerText;
    this.month = this.dashboardService.lastMonth();
    this.salesCountForMonth.push(this.month._value);
    this.salesChartOptions.series = this.salesCountForMonth;
    this.salesCountForWeek.pop();
    this.salesCountForYear.pop();
  }
  salesDataForYear(event) {
    this.days = event?.target?.innerText;
    this.year = this.dashboardService.lastYear();
    this.salesCountForYear.push(this.year._value);
    this.salesChartOptions.series = this.salesCountForYear;
    this.salesCountForMonth.pop();
    this.salesCountForWeek.pop();
  }

  constructor(private dashboardService: DashboardService) {
    this.revenueChartOptions = {
      chart: {
        height: 230,
        stacked: true,
        type: 'bar',
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          columnWidth: '17%',
          endingShape: 'rounded',
          hover: false,
        },
      },
      series: [
        {
          name: 'Earnings',
          data: [130, 120, 145, 150, 110, 90, 95, 99, 125],
        },
        {
          name: 'Expense',
          data: [-40, -50, -35, -55, -50, -20, -20, -35, -35],
        },
      ],
      colors: [colors.solid.primary, colors.solid.warning],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10,
        },
        yaxis: {
          lines: { show: false },
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        labels: {
          style: {
            colors: this.$textMutedColor,
            fontSize: '0.86rem',
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: this.$textMutedColor,
            fontSize: '0.86rem',
          },
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          show: false,
        },
      },
    };

    this.salesChartOptions = {
      chart: {
        type: 'radialBar',
        height: 275,
        sparkLine: {
          enabled: false,
        },
      },
      series: [30],
      plotOptions: {
        radialBar: {
          offsetY: 20,
          offsetX: 25,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%',
          },
          track: {
            colors: this.$white,
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              offsetY: -15,
              color: this.$textHeadingColor,
              fontSize: '1rem',
            },
            value: {
              offsetY: 15,
              color: this.$textHeadingColor,
              fontSize: '1.714rem',
            },
          },
        },
      },
      colors: [colors.solid.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [colors.solid.primary],
          inverseColor: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 8,
      },
      labels: ['Completed Sales'],
    };
    this.earningsChartOptions = {
      chart: {
        height: 120,
        type: 'donut',
        toolbar: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      series: [45, 55],
      comparedResult: [],
      labels: ['Month', 'Year'],
      stroke: { width: 0 },
      colors: [
        this.$earningsStrokeColor2,
        this.$earningsStrokeColor3,
        colors.solid.success,
      ],
      grid: {
        padding: {
          right: -20,
          bottom: -8,
          left: -20,
        },
      },
      plotOptions: {
        pie: {
          startAngle: -10,
          donut: {
            labels: {
              show: true,
              name: {
                offsetY: 15,
              },
              value: {
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                },
              },
              total: {
                show: true,
                offsetY: 15,
                label: '%',
                formatter: function (w) {
                  return '56';
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 1325,
          options: {
            chart: {
              height: 100,
            },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 120,
            },
          },
        },
        {
          breakpoint: 1065,
          options: {
            chart: {
              height: 100,
            },
          },
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 120,
            },
          },
        },
      ],
    };
  }

}
