import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-template',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css'
})
export class DashboardTemplateComponent {

  category: any;
}
