import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// interfaces
import { Saude } from '../../interfaces/saude.interface';
import { Candidato } from '../../interfaces/candidato.interface';

//Services
import { CandidatosService } from '../../providers/candidatos.service';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.component.html',
  styleUrls: ['./saude.component.css']
})
export class SaudeComponent implements OnInit {

  // candidato: Candidato = {
  //   nome: "",
  //   sexo: "",
  //   infantil: "",
  //   naturalidade: "",
  //   uf: "",
  //   dataNascimento: "",
  //   identidade: "",
  //   endereco: "",
  //   num: "",
  //   complemento: "",
  //   bairro: "",
  //   cep: "",
  //   telefone: ""
  // }

  saude: Saude = {
    // nome: "",
    // sexo: "",
    // infantil: "",
    // naturalidade: "",
    // uf: "",
    // dataNascimento: "",
    // identidade: "",
    // endereco: "",
    // num: "",
    // complemento: "",
    // bairro: "",
    // cep: "",
    // telefone: "",
    problemaGraveSaude: "",
    remedioControlado: "",
    planoSaude: "",
    alergia: "",
    remedioHabitual: "",
    acidente: "",
    contato1nome: "",
    contato1tel: "",
    contato2nome: "",
    contato2tel: ""
  }

  id:string;

  constructor(private candidatosService:CandidatosService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      console.log(parametros);
      this.id = parametros['id'];
    })
 }


  ngOnInit() {
  }

  alterar(){
    console.log( this.id );
    this.candidatosService.completarCandidato( this.saude, this.id )
      .subscribe( data=>{

      } )
   //  console.log( this.forma.value );
   //  this.candidatosService.novoCandidato( this.candidato )
   //    .subscribe( data=>{
    //
   //    } )
  }

}
