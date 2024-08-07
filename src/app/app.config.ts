import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { LocalStorageService } from './Services/local-storage.service';
import { EshopInterceptor } from './Utility/EshopInterceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const providers = [AuthService , LocalStorageService];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    ...providers,
    provideHttpClient(withInterceptors([EshopInterceptor])), provideAnimationsAsync(),
  ],
};
