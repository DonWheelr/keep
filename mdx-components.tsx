import type { MDXComponents } from "mdx/types";
import { H1, H2, H3, H4, Body } from "@/components/typography";

const components: MDXComponents = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  p: (props) => <Body {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
