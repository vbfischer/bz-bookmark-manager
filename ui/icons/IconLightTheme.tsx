import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconLightTheme = (
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
    <g clipPath="url(#icon-light-theme_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M10 1.667v1.666m0 13.334v1.666M3.334 10H1.667m3.595-4.738L4.084 4.083m10.655 1.179 1.178-1.179M5.262 14.742 4.084 15.92m10.655-1.178 1.178 1.178M18.334 10h-1.667m-2.5 0a4.167 4.167 0 1 1-8.333 0 4.167 4.167 0 0 1 8.333 0"
      />
    </g>
    <defs>
      <clipPath id="icon-light-theme_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgIconLightTheme);
export default ForwardRef;
