import { faker } from "@faker-js/faker";
import randomColor from "randomcolor";
import moment from "moment";

export default function (groupCount = 30, itemCount = 1000, daysInPast = 30) {
  let randomSeed = Math.floor(Math.random() * 1000);
  let groups = [];

  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `${i + 1}`,
      title: faker.person.firstName(),
      rightTitle: faker.person.lastName(),
      bgColor: randomColor({ luminosity: "light", seed: randomSeed + i }),
    });
  }

  let items = [];

  for (let i = 0; i < itemCount; i++) {
    const startDate =
      faker.date.recent({ days: daysInPast }).valueOf() +
      daysInPast * 0.3 * 86400 * 1000;

    const startValue =
      Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;

    const endValue = moment(
      startDate +
        faker.number.int({ min: 2, max: 20 }) * 15 * 60 * 1000
    ).valueOf();

    items.push({
      id: i + "",
      group: faker.number.int({ min: 1, max: groups.length }) + "",
      title: faker.hacker.phrase(),
      start: startValue,
      end: endValue,
      className:
        moment(startDate).day() === 6 || moment(startDate).day() === 0
          ? "item-weekend"
          : "",
      itemProps: {
        "data-tip": faker.hacker.phrase(),
      },
    });
  }

  items = items.sort((a, b) => b - a);

  return { groups, items };
}
