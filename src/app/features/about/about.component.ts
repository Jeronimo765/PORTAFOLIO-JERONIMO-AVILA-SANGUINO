import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly techPills = this.data.techPills;
  constructor(private data: PortfolioDataService) {}
}