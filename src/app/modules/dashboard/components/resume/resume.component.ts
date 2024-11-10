import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  downloadPdf() {
    let link = document.createElement("a")
    link.download = "CV_Rizki"
    link.href = "../../../../../assets/CV_Rizki.pdf"
    link.click()
  }

  ngOnInit(): void {
  }

}
