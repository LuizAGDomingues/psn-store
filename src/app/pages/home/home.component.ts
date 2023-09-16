import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games = [
    {
      gameCover: "assets/ac-cover.jpg",
      gameLabel: "GAME OF THE YEAR",
      gameType: "DIGITAL | PS3",
      gamePrice: "R$ 129,99"
    },
    {
      gameCover: "assets/bt-1.jpg",
      gameLabel: "EXCLUSIVE",
      gameType: "DIGITAL | PS4 PS5",
      gamePrice: "R$ 229,99"
    },
    {
      gameCover: "assets/bt-4.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 129,99"
    },
    {
      gameCover: "assets/bt-5.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS4 PS5",
      gamePrice: "R$ 229,99"
    },
    {
      gameCover: "assets/bt-bad-company-2.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS3",
      gamePrice: "R$ 99,90"
    },
    {
      gameCover: "assets/bt-hardline.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS3 PS4",
      gamePrice: "R$ 99,90"
    }
  ]
}
