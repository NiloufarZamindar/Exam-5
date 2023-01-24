import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 5px #d0d0d0",
        display: "flex",
      }}
    >
      <ContentLoader
        speed={2}
        width={1000}
        height={620}
        viewBox="0 0 1000 620"
        backgroundColor="#d4d4d4"
        foregroundColor="#ebebeb"
        {...props}
      >
        <circle cx="524" cy="210" r="8" />
        <rect x="539" y="204" rx="5" ry="5" width="246" height="11" />
        <circle cx="524" cy="244" r="8" />
        <rect x="540" y="237" rx="5" ry="5" width="246" height="11" />
        <circle cx="524" cy="278" r="8" />
        <rect x="540" y="272" rx="5" ry="5" width="246" height="11" />
        <circle cx="524" cy="311" r="8" />
        <rect x="540" y="305" rx="5" ry="5" width="246" height="11" />
        <rect x="63" y="50" rx="0" ry="0" width="391" height="339" />
        <rect x="369" y="398" rx="0" ry="0" width="85" height="92" />
        <rect x="521" y="56" rx="0" ry="0" width="332" height="28" />
        <rect x="521" y="100" rx="0" ry="0" width="332" height="7" />
        <rect x="521" y="111" rx="0" ry="0" width="332" height="7" />
        <rect x="521" y="122" rx="0" ry="0" width="332" height="7" />
        <rect x="521" y="145" rx="0" ry="0" width="78" height="33" />
        <rect x="621" y="145" rx="0" ry="0" width="78" height="33" />
        <rect x="167" y="399" rx="0" ry="0" width="85" height="92" />
        <rect x="268" y="399" rx="0" ry="0" width="85" height="92" />
        <rect x="64" y="399" rx="0" ry="0" width="85" height="92" />
        <rect x="64" y="508" rx="0" ry="0" width="842" height="17" />
        <rect x="64" y="538" rx="0" ry="0" width="842" height="17" />
        <rect x="64" y="566" rx="0" ry="0" width="842" height="17" />
        <rect x="517" y="375" rx="0" ry="0" width="388" height="23" />
        <rect x="517" y="413" rx="0" ry="0" width="388" height="23" />
        <rect x="517" y="452" rx="0" ry="0" width="388" height="23" />
      </ContentLoader>
    </div>
  );
};

export default ProductLoader;
