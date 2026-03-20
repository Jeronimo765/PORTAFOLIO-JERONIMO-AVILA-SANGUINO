import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly experiences = this.data.experiences;
  readonly education = this.data.education;
  readonly certifications = this.data.certifications;

  constructor(private data: PortfolioDataService) {}
}
