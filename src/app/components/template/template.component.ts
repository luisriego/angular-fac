import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Candidato } from '../../interfaces/candidato.interface';
// import { Candidato } from '../../model/candidato-model';

//Services
import { CandidatosService } from '../../providers/candidatos.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
        .aire-peq{
          margin-top: 30px;
          margin-botton: 5px
        }
        .caixa{
          border: 1px solid darkgrey;
          padding: 10px
        }
        .aceitar{
          color: red;
        }
        p{
          color: #007ab2;
        }

        /*CSS para impressão*/
        @media print {
          * {
                background: transparent !important;
                color: #000 !important;
                text-shadow: none !important;
                filter:none !important;
                -ms-filter: none !important;
            }
          .noprint{ display: none !important }
          h5{font-size: 2.4em}
        }
    `]
})
export class TemplateComponent implements OnInit {

  candidato: Candidato = {
    nome: "",
    sexo: "",
    infantil: "",
    horas: "",
    naturalidade: "",
    uf: "",
    dataNascimento: "",
    identidade: "",
    endereco: "",
    num: "",
    complemento: "",
    bairro: "",
    cep: "",
    telefone: "",
    termo: "",
    folha: "",
    livro: "",
    dataEmissao: "",
    ufCartorio: "",
    nomeCartorio: "",
    temId: "",
    numId: "",
    comId: "",
    dataId: "",
    ufId: "",
    orgaoId: "",
    nomePai: "",
    nascPai: "",
    idPai: "",
    cpfPai: "",
    instrucaoPai: "",
    profissaoPai: "",
    localTrbPai: "",
    telfPai: "",
    celularPai: "",
    emailPai: "",
    nomeMae: "",
    nascMae: "",
    idMae: "",
    cpfMae: "",
    instrucaoMae: "",
    profissaoMae: "",
    localTrbMae: "",
    telfMae: "",
    celularMae: "",
    emailMae: "",
    responsavelDoenca: "",
    necessidadeEspeciais: "",
    ultimaEscola: "",
    tratamento: "",
    qualTratamento: "",
    alergico: "",
    medicacao: "",
    dosagem: "",
    responsavel: "",
    nascResponsavel: "",
    idResponsavel: "",
    cpfResponsavel: "",
    instrucaoResponsavel: "",
    profissaoResponsavel: "",
    localTrbResp: "",
    telfResp: "",
    celularResp: "",
    emailResp: "",
    declaraRenda: "",
    tipoDeclaracao: "",
    problemaGraveSaude: "",
    remedioControlado: "",
    planoSaude: "",
    alergia: "",
    remedioHabitual: "",
    acidente: "",
    contato1nome: "",
    contato1tel: "",
    contato2nome: "",
    contato2tel: "",
    aceita: ""
  }

  visivel:boolean = false;

  estados = [{
  	id: "1",
  	cod: "AC",
  	nome: "Acre"
  },
       {
  	id: "2",
  	cod: "AL",
  	nome: "Alagoas"
  },
       {
  	id: "3",
  	cod: "AM",
  	nome: "Amazonas"
  },
       {
  	id: "4",
  	cod: "AP",
  	nome: "Amapá"
  },
       {
  	id: "5",
  	cod: "BA",
  	nome: "Bahia"
  },
       {
  	id: "6",
  	cod: "CE",
  	nome: "Ceará"
  },
       {
  	id: "7",
  	cod: "DF",
  	nome: "Distrito Federal"
  },
       {
  	id: "8",
  	cod: "ES",
  	nome: "Espírito Santo"
  },
       {
  	id: "9",
  	cod: "GO",
  	nome: "Goiás"
  },
       {
  	id: "10",
  	cod: "MA",
  	nome: "Maranhão"
  },
       {
  	id: "11",
  	cod: "MG",
  	nome: "Minas Gerais"
  },
       {
  	id: "12",
  	cod: "MS",
  	nome: "Mato Grosso do Sul"
  },
       {
  	id: "13",
  	cod: "MT",
  	nome: "Mato Grosso"
  },
       {
  	id: "14",
  	cod: "PA",
  	nome: "Pará"
  },
       {
  	id: "15",
  	cod: "PB",
  	nome: "Paraíba"
  },
       {
  	id: "16",
  	cod: "PE",
  	nome: "Pernambuco"
  },
       {
  	id: "17",
  	cod: "PI",
  	nome: "Piauí"
  },
       {
  	id: "18",
  	cod: "PR",
  	nome: "Paraná"
  },
       {
  	id: "19",
  	cod: "RJ",
  	nome: "Rio de Janeiro"
  },
       {
  	id: "20",
  	cod: "RN",
  	nome: "Rio Grande do Norte"
  },
       {
  	id: "21",
  	cod: "RO",
  	nome: "Rondônia"
  },
       {
  	id: "22",
  	cod: "RR",
  	nome: "Roraima"
  },
       {
  	id: "23",
  	cod: "RS",
  	nome: "Rio Grande do Sul"
  },
       {
  	id: "24",
  	cod: "SC",
  	nome: "Santa Catarina"
  },
       {
  	id: "25",
  	cod: "SE",
  	nome: "Sergipe"
  },
       {
  	id: "26",
  	cod: "SP",
  	nome: "São Paulo"
  },
       {
  	id: "27",
  	cod: "TO",
  	nome: "Tocantins"
  }]




  turmas = [
    {
      cod: "BERÇÁRIO 1",
      nome: "BERÇÁRIO 1: Crianças que ainda não engatinham e com elas são desenvolvidas atividades para estimular o engatinhar e outras"
    },{
      cod: "BERÇÁRIO 2",
      nome: "BERÇÁRIO 2: Crianças que já engatinham mas ainda não andam, é uma sala preparada para estimular os movimentos para andar com muito cuidado e carinho"
    },{
      cod: "BERÇÁRIO 3",
      nome: "BERÇÁRIO 3: Crianças que já começaram a andar mais ainda não estão aptas ao Maternal I"
    },{
      cod: "Maternal I",
      nome: "Maternal I – Crianças que vão completar dois anos após 30 de junho"
    },{
      cod: "Maternal II",
      nome: "Maternal II – Para Crianças com dois anos completos ou a completar até o dia 30 de junho"
    },{
      cod: "Maternal III",
      nome: "Maternal III – Para Crianças com três anos completos ou a completar até o dia 30 de junho"
    },{
      cod: "1º Período",
      nome: "1º Período – Crianças com quatro anos completos ou a completar até o dia 30 de junho"
    },{
      cod: "2º Período",
      nome: "2º Período – Crianças com cinco anos completos a a completar até o dia 30 de junho"
    },{
      cod: "1º ano de Ensino Fundamental",
      nome: "1º ano de Ensino Fundamental"
    },{
      cod: "2º ano de Ensino Fundamental",
      nome: "2º ano de Ensino Fundamental"
    },{
      cod: "3º ano de Ensino Fundamental",
      nome: "3º ano de Ensino Fundamental"
    },{
      cod: "4º ano de Ensino Fundamental",
      nome: "4º ano de Ensino Fundamental"
    },{
      cod: "5º ano de Ensino Fundamental",
      nome: "5º ano de Ensino Fundamental"
    }
  ]

  id: string;

  constructor(  private router:Router,
                private candidatosService:CandidatosService,
                private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(parametros => {
        console.log(parametros);
        this.id = parametros['id'];
      })
   }

   guardar(){
     console.log( this.candidato );
     this.candidatosService.novoCandidato( this.candidato, this.id )
       .subscribe( data=>{
            this.router.navigate(['/confirmacao', data.name]);
       } )
    //  console.log( this.forma.value );
    //  this.candidatosService.novoCandidato( this.candidato )
    //    .subscribe( data=>{
     //
    //    } )
   }

  ngOnInit() {
  }

  // guardar(forma:NgForm){
  //   console.log("Formulario Posteado");
  //   console.log(forma);
  //   console.log(forma.value);
  //   console.log(forma.errors);
  //   console.log("Candidato " + this.candidato);
  // }

  validarCPF(input){
    let soma = 0;
    let resto;
    let inputCPF = input;

    if(inputCPF == '00000000000') return false;

    for (let i = 1; i < 9; i++) {
      soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
      resto = (soma * 10) % 11;
    }

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;

    for (let i = 1; i < 10; i++) {
      soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
      resto = (soma * 10) % 11;
    }

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
  }

  print(): void {
    console.log('Imprimiendo!');
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
