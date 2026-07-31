import Link from "next/link";
import { Eyebrow, H1, Body } from "@/components/typography";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>404</Eyebrow>
      <H1 className="mt-2">Page not found</H1>

      <Body className="mt-6">
        There&apos;s nothing at this address. If you followed a link to get
        here, it may be outdated — the page it pointed to may have moved or
        been renamed.
      </Body>

      <Body className="mt-4">
        Start from{" "}
        <Link href="/" className="underline underline-offset-2">
          the homepage
        </Link>
        , or jump straight to{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>{" "}
        or{" "}
        <Link href="/docs" className="underline underline-offset-2">
          Documentation
        </Link>
        .
      </Body>
    </div>
  );
}
