import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface NavItem {
  id: number;
  name: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  NAV_ITEMS: NavItem[] = [
    { id: 1, name: 'Home', route: '/home' },
    { id: 2, name: 'About us', route: '/about-us' },
    { id: 3, name: 'Contact us', route: '/contact-us' }
  ];
}
