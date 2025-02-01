import { Component, OnInit } from '@angular/core';
import { HomeCardsComponent } from "../home-cards/home-cards.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  
  

}
