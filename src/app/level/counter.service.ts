import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count: WritableSignal<number> = signal(0);
  value = computed(this.count);

  increment(): void {
    this.count.update((value) => value + 1);
  }
}
