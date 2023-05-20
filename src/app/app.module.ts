import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgCacheDirective } from './core/directives/img-cache.directive';
import { ImgInterceptor } from './core/interceptors/img.interceptor';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieModalComponent } from './shared/components/movie-modal/movie-modal.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/search/search.component';
import { YtPlayerComponent } from './shared/components/yt-player/yt-player.component';
import { DirectivesModule } from './shared/directives/directives.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { MoviePlayerComponent } from './views/movie-player/movie-player.component';
import { UserComponent } from './views/user/user.component';

import {
    GoogleLoginProvider,
    SocialAuthServiceConfig,
    SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { SettingsComponent } from './shared/components/navbar/settings/settings.component';
import { SigninComponent } from './views/login/signin/signin.component';
import { RegisterComponent } from './views/login/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CarouselComponent,
        HeaderComponent,
        MovieModalComponent,
        NavbarComponent,
        UserComponent,
        YtPlayerComponent,
        MoviePlayerComponent,
        SearchComponent,
        LoginComponent,
        ImgCacheDirective,
        MainComponent,
        SettingsComponent,
        DialogComponent,
        SigninComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        YouTubePlayerModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        PipesModule,
        NgOptimizedImage,
        SocialLoginModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ImgInterceptor,
            multi: true,
        },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '729640305434-d1hh5dvo407o8qkrhgmnvmq9eiihgr22.apps.googleusercontent.com'
                        ),
                    },
                ],
            } as SocialAuthServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
