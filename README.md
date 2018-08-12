# github-paths 🗺

A tiny node module for getting URLs to github.

## Installation

```
npm install --save github-paths
```

or with yarn

```
yarn add github-paths
```

## Usage

Creating new issues:

```js
const github = require("github-paths");

// https://github.com/flaque/blog/issues/new?title=my+title&body=my+body+text
const href = github("flaque/blog").issue("my title", "my body text");
```

Editing files:

```js
const github = require("github-paths");

// https://github.com/flaque/github-paths/edit/master/index.js
const href = github("flaque/github-paths").edit("index.js");
```

Linking to source:

```js
const github = require("github-paths");

// https://github.com/Flaque/boop/blob/master/boop.go
const href = github("flaque/boop").source("boop.go");
```

## Why?

Github can be used in all sorts of ways that don't mesh with it's defined purpose.

For example, you can use github issues as a comment system if you'd like. Just put a URL in an href like this:

```html
<a href="https://github.com/flaque/blog/issues/new">Make a comment</a>
```

But did you know that github also supports `title` and `body` query params?

Try clicking on this link:

[https://github.com/flaque/blog/issues/new?title=plz+dont+submit&body=hi+there](https://github.com/flaque/blog/issues/new?title=plz+dont+submit&body=hi+there)
