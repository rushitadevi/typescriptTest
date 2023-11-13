const add = () => {
  return 4 + 5;
};

// console.log(add());

test("expect equa;", () => {
  const d = add();
  expect(d).toBe(9);
});
