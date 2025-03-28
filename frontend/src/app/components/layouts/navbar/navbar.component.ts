import { Component } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared.module';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
