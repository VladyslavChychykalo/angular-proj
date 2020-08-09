import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  posts: Post[] = [
    {
      title: 'Americano',
      text:
        'Americano is an espresso coffee additionally diluted with water. The recipe and name of the drink was received as a disparaging name for "not real" espresso, coined by Italians to emphasize the bad taste of Americans in the field of coffee, who did not like the original espresso because of its strength.',
      id: 11,
    },
    {
      title: 'Cappucino',
      text:
        'Cappuccino is an Italian espresso-based coffee drink. The classic version includes a double portion of black coffee, hot milk and thick milk foam, but some baristas use cream instead of the last two ingredients, they also add cinnamon, chocolate chips, and orange peel to the drink.',
      id: 22,
    },
    {
      title: 'Expresso',
      text:
        'Эспрессо – чёрный кофе, приготовленный в кофемашине или специальной кофеварке, где сквозь спрессованные молотые зёрна пропускают горячую воду под давлением 9 бар. Готовый напиток должен иметь плотную пенку (бариста называют её крема́) однородного золотисто-орехового цвета, толщиной не менее 2 мм. Во вкусе эспрессо гармонично сочетаются сладость, горечь и лёгкая кислинка. Оттенки вкуса зависят от сортов кофейных зёрен, входящих в состав смеси, степени обжарки и навыков баристы. Родина напитка – Италия. Эспрессо очень быстро готовят и столь же быстро выпивают. У него есть несколько вариантов, он служит основой для многих других кофейных напитков.',
      id: 33,
    },
    {
      title: 'Latte',
      text:
        'Latte is a fairly simple coffee drink with milk. Italy is considered to be his homeland, where his name is caffellatte, which is just “milk coffee”. Just like in our kitchen. Italians drink it in the morning at home.',
      id: 44,
    },
  ];

  getById(id: number) {
    return this.posts.find((p) => p.id === id);
  }
}
