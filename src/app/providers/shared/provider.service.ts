import { Injectable } from '@angular/core';

import { Http,Response, Headers, ResponseOptions, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Provider } from './provider.model';


@Injectable()
export class ProviderService {

 selectedProvider: Provider;
 providersList: Provider[];
 provider_db: boolean;


  constructor(private http: Http) { }

  postProvider(prov: Provider){
  	var body = JSON.stringify(prov);
  	var headerOptions = new Headers({'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'});
  	var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions});
  	return this.http.post('http://localhost:49590/api/Proveedor', body,requestOptions).map(x=> x.json());
  }


  putProvider(id, pro){
    var body = JSON.stringify(pro);
    var headerOptions = new Headers({'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:49590/api/Proveedor/'+id, body,requestOptions).map(x=> x.json());
  }


  getProvidersList(){
  	this.http.get('http://localhost:49590/api/Proveedor')
  	.map( (data: Response)=>{
  		return data.json() as Provider[];
  	} ).toPromise().then(x =>{
  		this.providersList = x;
  	})
  }

  getProviderById(prov: Provider){
  	
  	return this.http.get('http://localhost:49590/api/Proveedor/'+ prov.Proveedor1)
  	.map(x=> x.json());
  	
  }


  deleteProvider(id: string){
    return this.http.delete('http://localhost:49590/api/Proveedor/'+ id).map(res => res.json());
  }

}
