// Production is live on Vercel at https://keepmsp.io, with
// NEXT_PUBLIC_SITE_URL set accordingly (confirmed 2026-09-16 — see
// WEBSITE_ARCHITECTURE.md, Deployment & Hosting). Still read from env
// rather than hardcoding the domain, so a future domain change is a
// config update, not a code change. The localhost fallback is for
// development only; production must set the env var explicitly or fail
// at build time.
function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required in production and was not set. " +
        "Set it to the confirmed production URL before building or deploying."
    );
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
