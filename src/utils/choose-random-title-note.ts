import { random } from "remotion";

const eventNote = [
  "P/S: Cùng điểm lại top 2 sự kiện nổi bật 🧐",
  "P/S: Top 2 sự kiện không thể bỏ qua 😊",
  "P/S: Cùng nhau nhìn lại top 2 sự kiện nổi bật 🥳",
  "P/S: Cùng nhau ôn lại 2 sự kiện then chốt 🙃",
];

const locationNote = [
  "Cùng điểm lại những địa điểm đáng nhớ trong chuyến đi 🫡",
  "Cùng nhau nhìn lại những địa điểm đặc biệt trong chuyến đi ✈️",
  "Top những địa điểm không thể bỏ qua trong chuyến đi 🤯",
  "Những trải nghiệm khó quên tại các địa điểm có 102 😎 !",
  "Hành trình dài nhưng làm sao quên được những địa điểm này 😵‍💫",
  "Những điểm dừng chân đáng giá trong hành trình của bạn 🚗",
  "BREAKING NEWS: Những địa điểm không thể bỏ qua trong chuyến đi 🥶",
  "Những địa điểm xịn xò không thể thiếu trong video recap 🤓",
  "Ngại đi nhưng không ngại chia sẻ những địa điểm đẹp nhất 💤",
  "Bạn có nhớ mình đã đi qua những địa điểm này ? 🤔",
  "Sao mà bỏ qua được địa điểm này trong chuyến đi 😝",
];

export const chooseEventTitleNote = (randomString: string): string => {
  return eventNote[Math.floor(random(randomString) * eventNote.length)];
};

export const chooseLocationTitleNote = (randomString: string): string => {
  return locationNote[Math.floor(random(randomString) * locationNote.length)];
};
