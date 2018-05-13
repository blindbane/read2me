const faker = require("faker");
const _ = require("lodash");

module.exports = () => {
  const user = _.times(100, n => {
    return {
      id: faker.random.uuid(),
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      passcode: faker.internet.password(),
      texts: [],
      textGroups: []
    };
  });

  const text = _.times(500, n => {
    const userObj = faker.random.arrayElement(user);
    const textId = faker.random.uuid();
    userObj.texts = [...userObj.texts, textId];
    return {
      id: textId,
      userId: userObj.id,
      title: faker.lorem.words(3),
      text: faker.lorem.paragraphs(10)
    };
  });

  const textGroup = _.times(200, n => {
    const userObj = faker.random.arrayElement(user);
    const textGroupId = faker.random.uuid();
    userObj.textGroups = [...userObj.textGroups, textGroupId];
    return {
      id: textGroupId,
      title: faker.random.word(),
      userId: userObj.id,
      texts: userObj.texts
    };
  });

  return {
    user,
    text,
    textGroup
  };
};
