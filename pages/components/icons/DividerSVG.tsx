import { SVGProps } from "react";

const Divider = ({ fill }: SVGProps<SVGElement>) => {
  return (
    <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <path fill={fill} d="M0 8h196v1H0zM248 8h196v1H248z" />
        <g transform="translate(212)">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </svg>
  );
};

export default Divider;
