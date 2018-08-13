import test from "ava";
import github from ".";

test("issue can correctly create a path", t => {
  t.deepEqual(
    github("flaque/blog").issue("doggos and cats", "cats"),
    "https://github.com/flaque/blog/issues/new?title=doggos+and+cats&body=cats"
  );
});

test("edit can correctly create a path", t => {
  t.deepEqual(
    github("flaque/blog").edit("README.md"),
    "https://github.com/flaque/blog/edit/master/README.md"
  );

  t.deepEqual(
    github("flaque/blog").edit("src/html.js"),
    "https://github.com/flaque/blog/edit/master/src/html.js"
  );
});

test("source can correctly create a path", t => {
  t.deepEqual(
    github("flaque/blog").source("src/html.js"),
    "https://github.com/flaque/blog/blob/master/src/html.js"
  );
});
