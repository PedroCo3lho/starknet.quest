import React, { FunctionComponent } from "react";

interface IconProps {
  color?: string;
  width?: number;
}

const EyeIcon: FunctionComponent<IconProps> = ({
  color = "#E1DCEA",
  width = 17,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M7 8C7 7.60218 7.15804 7.22064 7.43934 6.93934C7.72064 6.65804 8.10218 6.5 8.5 6.5C8.89782 6.5 9.27936 6.65804 9.56066 6.93934C9.84196 7.22064 10 7.60218 10 8C10 8.39782 9.84196 8.77936 9.56066 9.06066C9.27936 9.34196 8.89782 9.5 8.5 9.5C8.10218 9.5 7.72064 9.34196 7.43934 9.06066C7.15804 8.77936 7 8.39782 7 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.83203 8.00033C1.83203 9.09366 2.11536 9.46099 2.68203 10.1977C3.81336 11.667 5.7107 13.3337 8.4987 13.3337C11.2867 13.3337 13.184 11.667 14.3154 10.1977C14.882 9.46166 15.1654 9.09299 15.1654 8.00033C15.1654 6.90699 14.882 6.53966 14.3154 5.80299C13.184 4.33366 11.2867 2.66699 8.4987 2.66699C5.7107 2.66699 3.81336 4.33366 2.68203 5.80299C2.11536 6.54033 1.83203 6.90766 1.83203 8.00033ZM8.4987 5.50033C7.83566 5.50033 7.19977 5.76372 6.73093 6.23256C6.26209 6.7014 5.9987 7.33728 5.9987 8.00033C5.9987 8.66337 6.26209 9.29925 6.73093 9.76809C7.19977 10.2369 7.83566 10.5003 8.4987 10.5003C9.16174 10.5003 9.79762 10.2369 10.2665 9.76809C10.7353 9.29925 10.9987 8.66337 10.9987 8.00033C10.9987 7.33728 10.7353 6.7014 10.2665 6.23256C9.79762 5.76372 9.16174 5.50033 8.4987 5.50033Z"
        fill={color}
      />
    </svg>
  );
};

export default EyeIcon;
