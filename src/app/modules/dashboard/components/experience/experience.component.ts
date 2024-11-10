import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      "name": "Fullstack Web Development Class",
      "program": "Cohort",
      "time": "Okt 2023 - Mei 2024",
      "desc": "Mempelajari full-stack web development: backend, frontend, dan DevOps deployment"
    }, {
      "name": "Develop Booking Ruang Rapat",
      "program": "Permintaan Atsung",
      "time": "July 2024 - July 2024",
      "desc": "Aplikasi web untuk mengelola, memesan ruang rapat, dan ketersediaannya"
    }, {
      "name": "Develop Sistem Persediaan",
      "program": "Permintaan Atsung",
      "time": "Agt 2024 - Okt 2024",
      "desc": "Aplikasi web untuk mengelola dan memesan ruang rapat dengan React, Vite, Tailwind, Express, MongoDB"
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
