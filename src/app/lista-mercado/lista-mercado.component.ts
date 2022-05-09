import { Component, Input, OnInit } from '@angular/core';
import { faCartFlatbed, faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-mercado',
  templateUrl: './lista-mercado.component.html',
  styleUrls: ['./lista-mercado.component.css']
})
export class ListaMercadoComponent implements OnInit {
  json = { "produtos": [ { "produtoId": 1, "descricao": "Melancia", "quantidade": "10", "categoria": "frutas" }, { "produtoId": 2, "descricao": "Abacaxi", "quantidade": "8", "categoria": "frutas" }, { "produtoId": 3, "descricao": "Maça", "quantidade": "2", "categoria": "frutas" }, { "produtoId": 4, "descricao": "Laranja", "quantidade": "0", "categoria": "frutas" }, { "produtoId": 5, "descricao": "Sabão em Pó", "quantidade": "2", "categoria": "limpeza" }, { "produtoId": 6, "descricao": "Detergente", "quantidade": "4", "categoria": "limpeza" }, { "produtoId": 7, "descricao": "Álcool", "quantidade": "2", "categoria": "limpeza" } ] }
  produtos = Array ();
  plus = faPlus;
  minus = faMinus;


  @Input('tab') set selectedTab(selectedTab:string) {
    this.produtos = this.json.produtos.filter(produto => produto.categoria == selectedTab);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
