import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      "name": "Sistem Persediaan",
      "url": "https://github.com/rizkitaufikanindhita/sistemPersediaan"
    },
    {
      "name": "Booking Ruang Rapat",
      "url": "https://github.com/rizkitaufikanindhita/bookingruangrapatFE"
    },
    {
      "name": "Counter App",
      "url": "https://github.com/rizkitaufikanindhita/wordAnalytics"
    },
    {
      "name": "Mini Absen",
      "url": "https://github.com/rizkitaufikanindhita/Fullstack_MiniAbsen"
    },
    {
      "name": "Medium Clone",
      "url": "https://github.com/rizkitaufikanindhita/MediumClone"
    },
    {
      "name": "Password Manager",
      "url": "https://github.com/rizkitaufikanindhita/Cohort_Practice/tree/main/passwordManager"
    }
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
