import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public windowHeight: BehaviorSubject<number> = new BehaviorSubject(0);
  public windowWidth: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}
}
