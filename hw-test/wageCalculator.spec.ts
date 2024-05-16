import { wageCalculator } from "../wageCalculator";

describe("wageCalculator", () => {
  it("Case 1: Not a leap year, mon, wed, no work level", () => {
    expect(wageCalculator(2023, ["mon", "wed"])).toStrictEqual(170);
  });
  it("Case 2: Leap year, mon", () => {
    expect(wageCalculator(2024, ["mon"])).toStrictEqual(120);
  });
  it("Case 3: Not a leap year, tue, is a director", () => {
    expect(wageCalculator(2023, ["tue"], "director")).toStrictEqual(110);
  });
  it("Case 4: Not a leap year, tue, is a manager", () => {
    expect(wageCalculator(2023, ["tue"], "manager")).toStrictEqual(90);
  });
  it("Case 5: Not a leap year, tue, is a manager", () => {
    expect(wageCalculator(2023, ["tue"], "employee")).toStrictEqual(80);
  });
  it("Case 6: Leap year, tue, is a manager", () => {
    expect(wageCalculator(2024, ["tue"], "manager")).toStrictEqual(108);
  });
  it("Case 7: Not a leap year, wed", () => {
    expect(wageCalculator(2023, ["wed"])).toStrictEqual(70);
  });
  it("Case 8: Not a leap year, thu", () => {
    expect(wageCalculator(2023, ["thu"])).toStrictEqual(70);
  });
  it("Case 9: Not a leap year, fri, work level", () => {
    expect(wageCalculator(2023, ["fri"], "1")).toStrictEqual(90);
  });
  it("Case 10: Not a leap year, fri, work level is empty", () => {
    expect(wageCalculator(2023, ["fri"], "")).toStrictEqual(210);
  });
  it("Case 11: Leap year, fri, work level", () => {
    expect(wageCalculator(2024, ["fri"], "1")).toStrictEqual(108);
  });
  it("Case 12: Not a leap year, sat", () => {
    expect(wageCalculator(2023, ["sat"])).toStrictEqual(200);
  });
  it("Case 13: Leap year, sun", () => {
    expect(wageCalculator(2024, ["sun"])).toStrictEqual(240);
  });
  it("Case 14: Not a leap year, unknown day", () => {
    expect(wageCalculator(2023, ["unknown"])).toStrictEqual(0);
  });
  it("Case 15: Leap year, unknown day", () => {
    expect(wageCalculator(2024, ["unknown"])).toStrictEqual(0);
  });
});
