import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  currentReport = null;
  message = '';

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getReport(this.route.snapshot.paramMap.get('id'));
  }

  getReport(id): void {
    this.reportService.get(id)
      .subscribe(
        data => {
          this.currentReport = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateReport(): void {
    this.reportService.update(this.currentReport.id, this.currentReport)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The report was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteReport(): void {
    this.reportService.delete(this.currentReport.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/reports']);
        },
        error => {
          console.log(error);
        });
  }
}
