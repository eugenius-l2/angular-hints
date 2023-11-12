import { Injectable, inject } from '@angular/core';

export const randomNumFactory = () => {
  const randomNumService = inject(RandomNumService);

  return randomNumService.getNum();
};

@Injectable({
  providedIn: 'root',
})
export class RandomNumService {
  getNum(): number {
    return Math.random();
  }
}
