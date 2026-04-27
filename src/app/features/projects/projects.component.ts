import { Component } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ProjectTag } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects = this.data.projects;

  constructor(private data: PortfolioDataService) {}

  getTagClass(type: ProjectTag['type']): string {
    return `tag-${type}`;
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
