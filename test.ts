import { Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const s = new Subject<void>();

s.subscribe(() => {
  console.log('test');
});

s.next();
