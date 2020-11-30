const { getCapacitySum } = require("../mappers/capacity");

describe("terrain capacity", () => {
  test("simple terrain with one gap", () => {
    const array = [3, 1, 4, 2, 3, 1];
    const capacity = getCapacitySum(array);
    expect(capacity).toBe(3);
  });
  test("send wrong attributes", () => {
    const capacityObject = getCapacitySum({ 3: 4 });
    const capacityString = getCapacitySum("wrong");
    const capacityNumber = getCapacitySum(7);
    expect(capacityObject).toBe(0);
    expect(capacityString).toBe(0);
    expect(capacityNumber).toBe(0);
  });
  test("send array with wrong attributes", () => {
    const capacityArrayString = getCapacitySum(["one", 1, 4, 2, 3, 1]);
    const capacityStringNumber = getCapacitySum(["3", 1, 4, 2, 3, 1]);
    const capacityArrayBoolean = getCapacitySum([4, 1, 4, 2, 3, 1, false]);
    expect(capacityArrayString).toBe(0);
    expect(capacityStringNumber).toBe(0);
    expect(capacityArrayBoolean).toBe(0);
  });
  test("more complex terrain with gap longer then 2", () => {
    const array = [88, 20, 19, 90, 15, 16, 5, 89, 2, 0, 6, 3, 32, 1, 0, 79, 89];
    const capacity = getCapacitySum(array);
    expect(capacity).toBe(957);
  });
});
