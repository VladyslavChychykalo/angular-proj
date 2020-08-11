import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from '../home/home.component';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(feedbacks: Feedback[], search = '', searchEl = 'email'): unknown {
    if (!search.trim()) {
      return feedbacks;
    }

    return feedbacks.filter((f) =>
      f[searchEl].toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
