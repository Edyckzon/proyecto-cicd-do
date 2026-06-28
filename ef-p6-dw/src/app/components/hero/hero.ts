import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  images = [
    '/images/hero_fashion_woman.png',
    '/images/hero_fashion_man.png',
    '/images/hero_jewelry_showcase.png',
    '/images/hero_casual_group.png',
    '/images/hero_boutique.png'
  ];
  
  currentIndex = signal(0);
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.currentIndex.update(index => (index + 1) % this.images.length);
  }

  prev() {
    this.currentIndex.update(index => (index - 1 + this.images.length) % this.images.length);
  }
  
  setIndex(index: number) {
    this.currentIndex.set(index);
    clearInterval(this.intervalId);
    this.startCarousel();
  }
}
