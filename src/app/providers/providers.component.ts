import { Component, OnInit } from '@angular/core';

import { ProviderService } from './shared/provider.service';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  providers: [ProviderService]
})
export class ProvidersComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
  }

}
