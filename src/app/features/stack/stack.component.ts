import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  readonly frontend = this.data.frontendSkills;
  readonly backend = this.data.backendSkills;
  readonly others = this.data.otherSkills;

  constructor(private data: PortfolioDataService) {}
}
