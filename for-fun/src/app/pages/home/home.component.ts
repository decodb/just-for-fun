import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomePageService } from '../../services/home-page/home-page.service';
import { ServiceComponent } from "../../components/service/service.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homePageService = inject(HomePageService);

  get cards() {
    return this.homePageService.CARDS();
  }
}
