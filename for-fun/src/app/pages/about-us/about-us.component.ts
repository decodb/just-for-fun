import { Component, inject } from '@angular/core';
import { AboutPageService } from '../../services/about-us-page/about-page.service';
import { PersonComponent } from '../../components/person/person.component';

@Component({
  selector: 'app-about-us',
  imports: [PersonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  aboutService = inject(AboutPageService);

  get members() {
    return this.aboutService.members;
  }
}
