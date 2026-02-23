import { Component } from '@angular/core';
import { AuthorizationComponent } from "./authorization/authorization.component";

@Component({
  selector: 'app-auth',
  imports: [AuthorizationComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
