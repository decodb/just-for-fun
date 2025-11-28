import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { memberType } from '../../services/about-us-page/about-page.service';

@Component({
  selector: 'app-person',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  memberData = input.required<memberType>();
}
