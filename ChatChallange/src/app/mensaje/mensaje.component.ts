import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {

  @Input() usuario!: string;
  mensaje: string = '';

  @Output() nuevoMensaje = new EventEmitter<{ usuario: string, texto: string }>();

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.nuevoMensaje.emit({ usuario: this.usuario, texto: this.mensaje });
      this.mensaje = '';
    }
  }

}
