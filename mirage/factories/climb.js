import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Climb ${i + 1}`;
  },
  stillHard: true,
  notes: faker.lorem.paragraphs(),
  slug(i){
    return `climb-${i + 1}`;
  }
});
