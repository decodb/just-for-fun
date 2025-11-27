import { Component, input } from '@angular/core';
import { ProductCard } from '../../services/home-page/home-page.service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  data = input.required<ProductCard>();
}
