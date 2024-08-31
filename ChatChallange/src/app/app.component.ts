import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from "./sala/sala.component";
import { MensajeComponent } from "./mensaje/mensaje.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent, MensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChatChallange';
}
