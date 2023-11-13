import { subtractInput } from "../subtract";

test("subtract should subtract two inputs", () => {
  const output = subtractInput(4, 6);
  expect(output).toBeGreaterThan(0);
  expect(output).toBe(2);
});
