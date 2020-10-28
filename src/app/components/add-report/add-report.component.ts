import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  report = {
    nickname: '',
    avatar: '',
    similarityLevel: 0
  };
  submitted = false;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  saveReport(): void {
    const data = {
      nickname: this.report.nickname,
      avatar: this.report.avatar,
      similarityLevel: 0
    };

    this.reportService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newReport(): void {
    this.submitted = false;
    this.report = {
      nickname: '',
      avatar: '',
      similarityLevel: 0
    };
  }

}
