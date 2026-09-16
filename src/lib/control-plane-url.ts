// The real self-serve Sign Up / Sign In entry point for KEEP lives in a
// separate app (control-plane), not this site — see /sign-up for the
// landing page that explains this and links out. Same "read from env,
// don't hardcode a domain" discipline as site-url.ts. The keepmsp.io
// (this site) / app.keepmsp.io (control-plane) split is live and
// confirmed (2026-09-16) — app.keepmsp.io resolves to this same Railway
// deployment via a Control-Plane-side custom domain. The dev/build
// fallback below is the real, currently-live production control-plane
// URL (Railway's own generated hostname), not a placeholder — confirmed
// live as of 2026-08-12 (cdacs/CLAUDE.md, "KEEPMSP.io Control Plane v1").
// Set NEXT_PUBLIC_CONTROL_PLANE_URL explicitly to prefer the
// app.keepmsp.io hostname in production instead of this fallback.
function resolveControlPlaneUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_CONTROL_PLANE_URL;
  if (envUrl) return envUrl;

  return "https://cdacs-production.up.railway.app";
}

export const controlPlaneUrl = resolveControlPlaneUrl();
