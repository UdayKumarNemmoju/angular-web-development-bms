import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }


  cards = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312747-kkkedqvwwy-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128225-xkmcgcpekk-portrait.jpg",
      title: "Vikrant Rona", certificate: "UA", Languages: "Kannada, Hindi, Tamil, Telugu,..."
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00318311-scsjbtpubq-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128946-tbspyrwprg-portrait.jpg",
      title: "Ek Villain Returns", certificate: "UA", Languages: "Hindi"
    },
  ]

  ngOnInit(): void {
  }

}
