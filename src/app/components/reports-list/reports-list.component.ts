import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {

  reports: any;
  currentReport = null;
  currentIndex = -1;
  report = '';

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.retrieveReports();
  }

  retrieveReports(): void {
    this.reportService.getAll()
      .subscribe(
        data => {
          this.reports = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveReports();
    this.currentReport = null;
    this.currentIndex = -1;
  }

  setActiveReport(report, index): void {
    this.currentReport = report;
    this.currentIndex = index;
  }
}
