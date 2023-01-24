import React from "react";
import ContentLoader from "react-content-loader";

const OrdersLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={620}
    viewBox="0 0 1000 620"
    backgroundColor="#d4d4d4"
    foregroundColor="#ebebeb"
    {...props}
  >
    <circle cx="86" cy="74" r="53" />
    <rect x="162" y="37" rx="3" ry="3" width="526" height="37" />
    <rect x="162" y="84" rx="3" ry="3" width="29" height="29" />
    <rect x="204" y="84" rx="3" ry="3" width="216" height="29" />
    <rect x="7" y="152" rx="0" ry="0" width="939" height="3" />
    <circle cx="84" cy="223" r="53" />
    <rect x="160" y="186" rx="3" ry="3" width="526" height="37" />
    <rect x="160" y="232" rx="3" ry="3" width="29" height="29" />
    <rect x="202" y="232" rx="3" ry="3" width="216" height="29" />
    <rect x="5" y="300" rx="0" ry="0" width="939" height="3" />
    <circle cx="84" cy="370" r="53" />
    <rect x="160" y="333" rx="3" ry="3" width="526" height="37" />
    <rect x="160" y="379" rx="3" ry="3" width="29" height="29" />
    <rect x="202" y="379" rx="3" ry="3" width="216" height="29" />
    <rect x="5" y="447" rx="0" ry="0" width="939" height="3" />
    <circle cx="84" cy="515" r="53" />
    <rect x="160" y="478" rx="3" ry="3" width="526" height="37" />
    <rect x="160" y="525" rx="3" ry="3" width="29" height="29" />
    <rect x="202" y="525" rx="3" ry="3" width="216" height="29" />
    <rect x="5" y="592" rx="0" ry="0" width="939" height="3" />
    <rect x="903" y="31" rx="0" ry="0" width="7" height="50" />
    <rect x="903" y="180" rx="0" ry="0" width="7" height="50" />
    <rect x="903" y="325" rx="0" ry="0" width="7" height="50" />
    <rect x="902" y="472" rx="0" ry="0" width="7" height="50" />
  </ContentLoader>
);

export default OrdersLoader;
