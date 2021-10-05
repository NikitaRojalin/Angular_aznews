import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    id:number=0;
data=[
    {
        id:1,
        img:"assets/img/trending/trending_top.jpg",
        heading:"Here come the moms in space",
    },
    {
        id:2,
        img:"assets/img/trending/trending_bottom1.jpg",
        heading:"Get the Illusion of Fuller Lashes by “Mascng.”"
    },
    {
        id:3,
        img:"assets/img/trending/trending_bottom2.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    },
    {id:4,
    img:"assets/img/trending/trending_bottom3.jpg",
    heading:"Get the Illusion of Fuller Lashes by “Mascng.”"


    },
    {
        id:5,
        img:"assets/img/trending/right1.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    },
    {
        id:6,
        img:"assets/img/trending/right2.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    },
    {
        id:7,
        img:"assets/img/trending/right3.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    },
    {
        id:8,
        img:"assets/img/trending/right4.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    },
    {
        id:9,
        img:"assets/img/trending/right5.jpg",
        heading:"Welcome To The Best Model Winner Contest"

    }
];
  constructor(private activeRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id
    })
  }

}
