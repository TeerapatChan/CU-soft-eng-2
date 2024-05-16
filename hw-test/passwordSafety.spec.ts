import { passwordSafety } from "../passwordSafety";

describe("passwordSafety", () => {
  it("Case 1: Password is less than 8 characters", () => {
    expect(passwordSafety("ppp")).toStrictEqual(
      "Password should more than 8 characters"
    );
  });
  it("Case 2: Password does not contain any number", () => {
    expect(passwordSafety("Password")).toStrictEqual(
      "Password should contain at least 1 number"
    );
  });
  it("Case 3: Password does not contain any uppercase character", () => {
    expect(passwordSafety("password123")).toStrictEqual(
      "Password should contain at least 1 uppercase character"
    );
  });
  it("Case 4: Password does not contain any lowercase character", () => {
    expect(passwordSafety("PASSWORD123")).toStrictEqual(
      "Password should contain at least 1 lowercase character"
    );
  });
  it("Case 5: Password does not contain any special character", () => {
    expect(passwordSafety("Password123")).toStrictEqual(
      "Password should contain at least 1 special character"
    );
  });
  it("Case 6: Password is safe", () => {
    expect(passwordSafety("Password123!")).toStrictEqual(
      "Password is safe (a little bit)"
    );
  });
});
