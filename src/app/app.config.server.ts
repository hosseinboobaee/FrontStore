import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
const providers = [AuthService];
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ...providers,
    provideHttpClient(withFetch()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
