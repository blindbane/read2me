const faker = require("faker");
const _ = require("lodash");

module.exports = () => {
  const text = _.times(100, n => {
    return {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      title: faker.lorem.words(3),
      text: faker.lorem.paragraphs(10)
    };
  });

  return {
    text
  };
};
