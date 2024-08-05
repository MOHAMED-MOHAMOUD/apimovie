import { Component  } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { MoviesService } from '../movies.service';
import { Root } from '../post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts!:Root[];
  imagePath:string="https://image.tmdb.org/t/p/w500"
constructor(public _MoviesService:MoviesService){}

ngOnInit():void{
  this._MoviesService.getpost().subscribe((res)=>{
    console.log(res.results)
this.posts = res.results
  })

}

}
