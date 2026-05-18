/**
 * Danger JS rules for Transport Stack.
 * Runs on every PR. Warns about common process gaps.
 * Does NOT block merges — only comments on the PR.
 */

const pr = danger.github.pr;
const MAX_PR_LINE_COUNT = 500;

// PR is too large — warn about reviewability
if (pr.additions + pr.deletions > MAX_PR_LINE_COUNT) {
  warn(`This PR is large (${pr.additions + pr.deletions} lines changed). Consider breaking it into smaller PRs.`);
}

// No description in PR body
if (pr.body.length < 20) {
  warn("PR description is very short. Please add context: what does this change, why, and how was it tested?");
}

// Changelog not mentioned
const bodyLower = pr.body.toLowerCase();
if (!bodyLower.includes("changelog")) {
  warn("No mention of CHANGELOG update. If this change is user-facing, please add a CHANGELOG entry.");
}

// Tests not mentioned
if (!bodyLower.includes("test")) {
  warn("No mention of tests. Did you add or update tests for this change?");
}

// Markdown files only — no code review needed
const markdownOnly = danger.git.modified_files.every(f => f.endsWith(".md"));
if (markdownOnly && danger.git.modified_files.length > 0) {
  markdown("All changes are in Markdown files. Markdown-only PRs are encouraged for documentation improvements.");
}
