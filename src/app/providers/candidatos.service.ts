import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Candidato } from '../interfaces/candidato.interface';
import { Saude } from '../interfaces/saude.interface';

@Injectable()
export class CandidatosService {

  candidatoURL: string = "https://fac-rest.firebaseio.com/candidato.json"
  completarURL: string = "https://fac-rest.firebaseio.com/candidato/"

  constructor( private http: Http ) {

  }

  novoCandidato( candidato: Candidato, key$: string ){

    let body = JSON.stringify(candidato);
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post( this.candidatoURL, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })

  }

  completarCandidato( candidato: Saude, key$: string ){

    let body = JSON.stringify(candidato);
    let headers = new Headers({
      "Content-Type": "application/json"
    });

    let url = `${this.completarURL}/${key$}.json`

    return this.http.put( url, body, { headers } )
        .map( res=>{
          console.log(res.json());
          return res.json();
        })

  }

}
