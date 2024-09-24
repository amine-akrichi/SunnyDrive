import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeScrollService {
  private _scrollToFeaturedSubject = new Subject<void>();
  scrollToFeaturedSubject$ = this._scrollToFeaturedSubject.asObservable();
  private _scrollToHomeSubject = new Subject<void>();
  scrollToHomeSubject$ = this._scrollToHomeSubject.asObservable();


  triggerScrollToFeaturedSubject() {
    this._scrollToFeaturedSubject.next();
  }

  triggerScrollToHomeSubject() {
    this._scrollToHomeSubject.next();
  }
}
