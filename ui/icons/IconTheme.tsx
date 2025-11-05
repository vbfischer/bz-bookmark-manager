import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconTheme = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      clipPath="url(#icon-theme_svg__a)"
    >
      <path d="M1.667 10A8.333 8.333 0 0 0 10 18.333a2.5 2.5 0 0 0 2.5-2.5v-.416c0-.387 0-.58.022-.743a2.5 2.5 0 0 1 2.152-2.153c.162-.021.356-.021.743-.021h.417a2.5 2.5 0 0 0 2.5-2.5 8.333 8.333 0 0 0-16.667 0" />
      <path d="M5.834 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666m7.5-3.333a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667m-5-.833a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667" />
    </g>
    <defs>
      <clipPath id="icon-theme_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgIconTheme);
export default ForwardRef;
