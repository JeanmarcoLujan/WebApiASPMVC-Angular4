import { Component, OnInit } from '@angular/core';

import { ProviderService } from '../shared/provider.service';
import { Provider } from '../shared/provider.model';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
  	this.providerService.getProvidersList();
  }


  showForEdit(pro: Provider){
  	this.providerService.selectedProvider = Object.assign({},pro);

  	
  }


  onDelete(id: string){

  	if ( confirm("Esta Ud seguro de la eliminacion?") == true) {
  		this.providerService.deleteProvider(id)
  		.subscribe(x=>{
  		this.providerService.getProvidersList();
  		});
  	}
  	
  }
}
