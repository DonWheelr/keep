// The real self-serve Sign Up / Sign In entry point for KEEP lives in a
// separate app (control-plane), not this site — see /sign-up for the
// landing page that explains this and links out. Same "read from env,
// don't hardcode an undecided domain" discipline as site-url.ts: the
// planned split is keepmsp.io (this site) / app.keepmsp.io (control-plane),
// but that domain cutover hasn't happened yet (WEBSITE_ARCHITECTURE.md §8).
// The dev/build fallback below is the real, currently-live production
// control-plane URL (Railway), not a placeholder — confirmed live as of
// 2026-08-12 (cdacs/CLAUDE.md, "KEEPMSP.io Control Plane v1"). Production
// builds of this site should set NEXT_PUBLIC_CONTROL_PLANE_URL explicitly
// once the real domain is decided, same as NEXT_PUBLIC_SITE_URL.
function resolveControlPlaneUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_CONTROL_PLANE_URL;
  if (envUrl) return envUrl;

  return "https://cdacs-production.up.railway.app";
}

export const controlPlaneUrl = resolveControlPlaneUrl();
