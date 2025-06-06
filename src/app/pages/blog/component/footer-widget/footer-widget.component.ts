import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-widget',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer-widget.component.html',
  styleUrl: './footer-widget.component.scss'
})
export class FooterWidgetComponent {
  constructor(public router: Router) {}
}
