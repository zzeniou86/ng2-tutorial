import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './app/mocks';

import { Angular2HeroesAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2HeroesAppComponent, [
  HTTP_PROVIDERS,
  provide(XHRBackend, {useClass: InMemoryBackendService}), // in-mem server
  provide(SEED_DATA, {useClass: InMemoryDataService}) // in-mem server data
   ]);

