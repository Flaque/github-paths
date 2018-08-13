const test = require("ava");
const { isRepo } = require("./util");

test("a good repo will match", t => {
  t.true(isRepo("flaque/evan"));
  t.true(isRepo("flaque/is-repo"));
  t.true(isRepo("dog-man/is-repo"));
  t.true(isRepo("dog-man/is.repo.js"));
});

test("a bad repo will not match", t => {
  t.false(isRepo("flaque / evan"));
  t.false(isRepo("flaque//evan"));
  t.false(isRepo("/flaque/evan"));
  t.false(isRepo("flaque/evan/"));
  t.false(isRepo("flaque"));
});
