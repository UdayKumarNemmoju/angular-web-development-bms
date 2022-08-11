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

  cards1 = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjQlICAzOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00075253-ccyjknqens-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Hindi, Tamil, Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTJrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330638-xawqjuhwvc-portrait.jpg",
      title: "The Legend", certificate: "UA", Languages: "Tamil, Hindi, Telugu, Malayalam"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICAyNmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321464-htjfsnqugk-portrait.jpg",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA3MWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302403-jmbsnyjdek-portrait.jpg",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
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
      image: "",
      title: "Thank You", certificate: "UA", Languages: "Telugu"
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjAwIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333997-vaftcymtax-portrait.jpg",
      title: "Shamshera", certificate: "UA", Languages: "Tamil, Hindi, Telugu"
    },
    {
      image: "",
      title: "The Warriorr", certificate: "UA", Languages: "Telugu, Tamil"
    },
    {
      image: "",
      title: "Ramarao on Duty", Languages: "Telugu, Hindi"
    },
  ]


  ngOnInit(): void {
  }

}
