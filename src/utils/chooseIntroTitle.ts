import { random } from "remotion";

const introTitles = [
  "Our memorable\nmoments",
  "Our memorable\ntrip",
  "Our memories",
  "Our journey\ntogether",
  "Our trip recap",
  "Our moments recap",
];

export const chooseIntroTitle = (time?: Date): string => {
  const seasonTitles = [];

  if (time) {
    const month = time.getMonth() + 1;
    if (month <= 4) {
      seasonTitles.push("Spring Story");
      seasonTitles.push("Spring Memories");
    } else if (month <= 7) {
      seasonTitles.push("Summer Story");
      seasonTitles.push("Summer Memories");
    } else if (month <= 10) {
      seasonTitles.push("Fall Story");
      seasonTitles.push("Fall Memories");
    } else {
      seasonTitles.push("Winter Story");
      seasonTitles.push("Winter Memories");
    }
  }

  const allTitles = [...introTitles, ...seasonTitles];

  return allTitles[Math.floor(random(null) * allTitles.length)];
};

export const chooseIntroSubText = (time: Date): string => {
  const month = time.getMonth() + 1; // getMonth() trả về tháng từ 0 đến 11, vì vậy cộng thêm 1
  const year = time.getFullYear();

  return `Tháng ${month} - ${year}`;
};
