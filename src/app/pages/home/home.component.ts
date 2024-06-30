import { Component } from '@angular/core';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { TvComponent } from '../../components/tv/tv.component';
import { DevicesComponent } from '../../components/devices/devices.component';
import { KidsComponent } from '../../components/kids/kids.component';
import { DownloadComponent } from '../../components/download/download.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, TvComponent, DevicesComponent,KidsComponent,DownloadComponent,QuestionsComponent,FooterComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
