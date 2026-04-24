export function isValidURL(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function normalizeURL(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}

export function runAudit(inputURL) {
  const url = normalizeURL(inputURL);

  if (!isValidURL(url)) {
    throw new Error("Invalid URL provided");
  }

  let score = 100;
  const issues = [];

  // Security check
  if (!url.startsWith("https://")) {
    score -= 15;
    issues.push("SSL Certificate warning: Insecure protocol detected");
  }

  // Canonical check
  if (url.length < 12) {
    score -= 5;
    issues.push("URL structure too short for optimal indexing");
  }

  // Structural checks
  const checks = [
    {
      id: "schema",
      message: "Missing JSON-LD or Microdata (Schema.org) for structured results",
      points: 20,
    },
    {
      id: "faq",
      message: "No FAQ schema detected; missing rich snippet opportunities",
      points: 15,
    },
    {
      id: "headings",
      message: "Improper heading hierarchy: Missing H1 or multiple H1 tags",
      points: 10,
    },
    {
      id: "semantics",
      message: "Low semantic HTML usage (excessive div-soup detected)",
      points: 10,
    },
  ];

  checks.forEach((check) => {
    // Simulating a real check that always fails for now
    score -= check.points;
    issues.push(check.message);
  });

  score = Math.max(0, Math.min(100, score));

  return { score, issues };
}

export async function runMockAudit(inputURL) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));
  return runAudit(inputURL);
}