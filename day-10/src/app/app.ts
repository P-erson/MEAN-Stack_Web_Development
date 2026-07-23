import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from "./navbar/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navbarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day-10');
}
