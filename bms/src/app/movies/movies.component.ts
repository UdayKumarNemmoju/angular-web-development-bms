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
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICAxNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00317972-gflbwpunba-portrait.jpg",
      title: "macherla niyojakavargam",  certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA0M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00307869-ylrcfthhnh-portrait.jpg",
      title: "karthikeya 2", certificate: "UA", Languages: "Telugu, Hindi, Tamil, Kannada"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA4Nmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329656-fargkumvcu-portrait.jpg",
      title: "sita ramam", certificate: "UA", Languages: "Telugu, Hindi, Tamil, Malayalam"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA2N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311534-sasbeqskmg-portrait.jpg",
      title: "bimbisara", certificate: "UA", Languages: "telugu"
    },
  ]

  cards1 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICA4NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098735-dgptskgysx-portrait.jpg",
      title: "lal singh chaddha", certificate: "UA", Languages: "Hindi, Tamil, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA3OWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302403-jmbsnyjdek-portrait.jpg",
      title: "thor: love and thunder", certificate: "UA", Languages: "Tamil, Hindi, Telugu, Malayalam"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA0OWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-ffcyefjbfv-portrait.jpg",
      title: "top gun: maverick", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICAzayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00325158-dlyaqxxbjm-portrait.jpg",
      title: "gaalipata 2", Languages: "Telugu, Hindi"
    },
  ]
  cards2 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA1Mmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094131-mkdsdrudql-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122133-uhggatfrfk-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA0N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-ewxjavhqhp-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331380-zjvqpddbwh-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]
  cards3 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICAxMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333192-qjvsrzyfba-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00334053-dafquacglf-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA0ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00334328-esbjrhfbkj-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAxNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00327080-xderxyryyg-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]
  cards4 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA0NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00318143-qkfgkrpmes-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331781-drexlasrdb-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICA0NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00112828-xpzuvynsln-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MmsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331896-rtvaullhxe-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]
  cards5 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA1OWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00077150-jakkucdbgz-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00334970-zcyrqmdgtt-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00318402-fugaadlgnp-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00081579-fvunkbxfzj-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]
  cards6 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA0ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00332365-xdwvycrudb-portrait.jpg",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NmsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330615-gduqknjpsl-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA5ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331417-fufktzwhhn-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331909-ebkcjpjmde-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]
  cards7 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122133-bbggujchps-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
  ]


  header: string = "Enjoy Online Ticket Booking for Movies in Hyderabad With BookMyShow"
  header1: string = "Latest Movies To Watch in Hyderabad With Family And Friends"
  header2: string = "Upcoming Bollywood & Hollywood Movies That You Can't Miss "
  header3: string = "Exciting Tollywood & Kollywood Movies To Book Tickets For "
  header4: string = "The Joy Of Movie Tickets Bookings with Just a Few Clicks "
  para: string = "If you are planning for movie ticket bookings for the latest movies in Hyderabad, don't look any further. Now it is easy to get on with online ticket booking with BookMyShow. Your one-stop solution for movies to watch this weekend.  Everyone enjoys watching their favorite movies on the big screen, and the excitement of watching it with friends is unparalleled. If you have been eagerly waiting for a movie that you can watch with your friends and family, now you know where to get the tickets from. When you watch a film in a cinema theatre, you get to watch it on a massive screen with surround-sound, and that enhances your movie-watching experience. Thus, allowing you to be a part of the actual  movie. Get to know about all movies and movie trailers to watch here. Also, know how to book movie tickets."
  para1: string = "Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies to be released   with the biggest star cast. Enjoy your favourite movie, not just with your friends, but in a cinema hall Hyderabad that will be filled with like-minded people. Be a part of everyone's reaction Dates are already announced, and all you need to   do is book the tickets for the preferred date so that you dont end up missing the first-day first show! Don't worry we have the list of shows near you and movie showtimes."
  para2: string = "Have you checked out the latest movie reviews of some of the best Hollywood movies? If so, we bet you would want to watch them all in the nearest movie theatre! With the anticipation of the release of Hit: The First Case, who would like to miss the first-day first show experience? The Hollywood movies running in cinemas now are already making the audience want for more, and with the new releases happening in the coming months, we recommend booking the tickets now in Hyderabad. Check out all the latest movie trailers here!"
  para3: string = "Just like Bollywood and Hollywood movies, Tollywood seems to have a few good movie showtimes as well. You can plan for movies to watch this Friday with these Tollywood movies because the star cast is superb, and the storylines of these movies have already started making news. It will be super interesting to watch Taapsee Pannu.Keep an eye on the release date of Shabaash Mithu in Hyderabad. Don't miss any upcoming movies."
  para4: string = "Grab on your popcorn because there are many movies to watch today in Hyderabad. If you want to save some money, dont miss out on our movie offers and discounts. Check out the movies running in cinemas time, and call all your friends to enjoy the best movie-watching experience together. There are many big releases in the pipeline, and it is expected that these movies will have the perfect casting and direction. Get ready for upcoming movies in theatres."
  para5: string = "Dont wait anymore and book your movie tickets from BookMyShow today at the best price! Your access to your favourite movie in Hyderabad is only a click away! "

  ngOnInit(): void {
  }

}
