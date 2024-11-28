import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css'
})
export class MahasiswaComponent {

}
