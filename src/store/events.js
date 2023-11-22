import { defineStore } from 'pinia';

export const useEventsStore = defineStore('events', {
  state() {
    return {
      events: [
        { id: '1', title: 'Monopoly', imgUrl: 'https://www.funcorp.in/cdn/shop/files/E82720791_195166190884_main_21-S.jpg?v=1683370087' },
        { id: '2', title: 'Avalon', imgUrl: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*y13UY8DX7vocZKeZSfWBPQ.jpeg' },
        { id: '3', title: 'Sonar', imgUrl: 'https://azure.wgp-cdn.co.uk/app-table-top-gaming/posts/pic3914256_lg-33313.jpg?&width=600&height=380&bgcolor=ffffff&mode=crop&format=png&webp.quality=40&scale=both' }
      ]
    };
  }
});
