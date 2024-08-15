import { Component, AfterViewInit, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import * as firebase from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {}
  items: string[] = [
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png',
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png',
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png',
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png',
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png',
    'https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png',
  ];

  ngOnInit(): void {}
}
