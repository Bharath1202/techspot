import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Electronics } from '../../model/electronics';
import { ElectronicsService } from '../../service/electronics.service';

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.scss']
})
export class ElectronicsListComponent implements OnInit {
  displayedColumns: string[] = ['mobileName', 'action'];
  public dataSource;
  public tempData = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private electronicsService: ElectronicsService) { }

  ngOnInit(): void {
    this.getAllproduct();

  }
  applyFilter(event) {
    const val = event.target.value;
    const temp = this.dataSource.filter(function (d) {
      return d.mobileName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSource = temp;
  }
  getAllproduct() {
    this.electronicsService.getAllElectronics().subscribe((res: any) => {
      this.dataSource = res?.result;
      this.tempData = res?.resultl;
    }, (error) => {
      console.log(error);
    })
  }

}
