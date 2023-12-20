import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private http: HttpClient) { }

 // login(email: string, password: string): Observable<any> {
    // Envoyer la requête au backend pour l'authentification par e-mail
    // Utilisez le service HttpClient pour effectuer des requêtes HTTP
  }

 // loginWithSocial(provider: string): Observable<any> {
    // Envoyer la requête au backend pour l'authentification sociale
  //}

  // Autres méthodes d'authentification et gestion des tokens

//}
