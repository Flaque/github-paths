require("whatwg-url"); // Polyfill for browser/node URL

const { isRepo } = require("./util");
const GITHUB_PATH = "https://github.com";

/**
 * Returns a url for new issues
 * @param {String} title
 * @param {String} body
 */
function issue(title, body) {
  const url = new URL(this.path);
  url.pathname += "/issues/new";

  url.searchParams.append("title", title);
  url.searchParams.append("body", body);

  return url.href;
}

/**
 * Returns a url for editing a file
 * @param {String} filepath
 */
function edit(filepath) {
  const url = new URL(this.path);
  url.pathname += "/edit/master/" + filepath;
  return url.href;
}

/**
 * Returns a url for viewing the source of a file
 * @param {String} filepath
 */
function source(filepath) {
  const url = new URL(this.path);
  url.pathname += "/blob/master/" + filepath;
  return url.href;
}

/**
 * Creates a builder for github urls
 * @param {String} repo
 */
function github(repo) {
  if (!isRepo(repo)) {
    throw "github-paths expects a repo of type '<org>/<name>'";
  }

  this.path = `${GITHUB_PATH}/${repo}`;
  this.issue = issue;
  this.edit = edit;
  this.source = source;

  return this;
}

module.exports = github;
