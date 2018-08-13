import "whatwg-url"; // Polyfill for browser/node URL
import { isRepo } from "./util";

const GITHUB_PATH = "https://github.com";

class Github {
  constructor(repo) {
    if (!isRepo(repo)) {
      throw "github-paths expects a repo of type '<org>/<name>'";
    }

    this.path = `${GITHUB_PATH}/${repo}`;

    return this;
  }

  /**
   * Returns a url for new issues
   * @param {String} title
   * @param {String} body
   */
  issue(title, body) {
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
  edit(filepath) {
    const url = new URL(this.path);
    url.pathname += "/edit/master/" + filepath;
    return url.href;
  }

  /**
   * Returns a url for viewing the source of a file
   * @param {String} filepath
   */
  source(filepath) {
    const url = new URL(this.path);
    url.pathname += "/blob/master/" + filepath;
    return url.href;
  }
}

/**
 * Creates a builder for github urls
 * @param {String} repo
 */
function github(repo) {
  return new Github(repo);
}

export default github;
