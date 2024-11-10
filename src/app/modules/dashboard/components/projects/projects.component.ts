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
      "url": "https://github.com/rizkitaufikanindhita/sistemPersediaan",
      "icon": "../../../../../assets/inventory.svg"
    },
    {
      "name": "Booking Ruang Rapat",
      "url": "https://github.com/rizkitaufikanindhita/bookingruangrapatFE",
      "icon": "../../../../../assets/ruangrapat.svg"
    },
    {
      "name": "Counter App",
      "url": "https://github.com/rizkitaufikanindhita/wordAnalytics",
      "icon": "../../../../../assets/counter.svg"
    },
    {
      "name": "Mini Absen",
      "url": "https://github.com/rizkitaufikanindhita/Fullstack_MiniAbsen",
      "icon": "../../../../../assets/absen.svg"
    },
    {
      "name": "Medium Clone",
      "url": "https://github.com/rizkitaufikanindhita/MediumClone",
      "icon": "../../../../../assets/medium.svg"
    },
    {
      "name": "Password Manager",
      "url": "https://github.com/rizkitaufikanindhita/Cohort_Practice/tree/main/passwordManager",
      "icon": "../../../../../assets/password.svg"
    }
  ]

  constructor() { }
  ngOnInit(): void {
  }

}
