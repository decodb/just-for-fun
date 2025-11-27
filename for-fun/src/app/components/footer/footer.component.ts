import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FooterItem {
  id: number;
  name: string;
  route: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  FOOTER_ITEMS: FooterItem[] = [
    { id: 1, name: 'Home', route: '/home' },
    { id: 2, name: 'About us', route: '/about-us' },
    { id: 3, name: 'Contact us', route: '/contact-us' }
  ];
}
