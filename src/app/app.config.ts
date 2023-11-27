import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// https://stackoverflow.com/questions/76427328/anyone-try-using-inmemorywebapi-with-standalone-components
// https://stackoverflow.com/questions/76706524/how-to-import-commonmodule-for-root-in-standalone-components-appoach
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    ]),
  ]
};
