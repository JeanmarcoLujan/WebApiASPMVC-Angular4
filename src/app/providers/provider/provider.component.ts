import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProviderService } from '../shared/provider.service';


@Component({
	selector: 'app-provider',
	templateUrl: './provider.component.html',
	styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

	constructor(private providerService: ProviderService) { }

	ngOnInit() {
		this.resetForm();
	}

	resetForm(form?: NgForm){
		
		this.providerService.selectedProvider = {
			Proveedor1: '',
			RazonSocial: '',
			Direccion: '',
			email: '',
			Ruc: '',
			Local: true,
		}

		
	}

	onSubmit(form: NgForm){


		this.providerService.getProviderById(form.value)
		.subscribe(data =>{
			
			if (!data) {
				this.providerService.postProvider(form.value)
				.subscribe(data =>{
					this.resetForm(form);
					this.providerService.getProvidersList();
				});
			}else{
				this.providerService.putProvider( form.value.Proveedor1 ,form.value)
				.subscribe(data =>{
					this.resetForm(form);
					this.providerService.getProvidersList();
				});
			}
		});

	}

}
