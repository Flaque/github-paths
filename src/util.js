function isRepo(repo) {
  const matches = repo.match(/([a-z0-9\-\.]+)\/([a-z0-9\-\.]+)/gi);
  if (!matches) return false;
  const matchesOnlyOne = matches.length === 1;
  const matchesExactly = matches[0] === repo;

  return matchesOnlyOne && matchesExactly;
}

export { isRepo };
