import React from "react";
import ContentLoader from "react-content-loader";

const BowlsLoader = (props) => {
  return (
    <div
      style={{
        textAlign:"center"
      }}
    >
      <ContentLoader
        speed={2}
        width={850}
        height={400}
        viewBox="0 0 850 400"
        {...props}
      >
        <rect x="296" y="2" rx="0" ry="0" width="2" height="372" />
        <rect x="562" y="4" rx="0" ry="0" width="2" height="372" />
        <rect x="295" y="2" rx="0" ry="0" width="268" height="2" />
        <rect x="295" y="374" rx="0" ry="0" width="268" height="2" />
        <circle cx="427" cy="124" r="66" />
        <rect x="296" y="3" rx="0" ry="0" width="268" height="51" />
        <rect x="329" y="193" rx="0" ry="0" width="198" height="11" />
        <rect x="369" y="229" rx="0" ry="0" width="114" height="11" />
        <rect x="315" y="266" rx="0" ry="0" width="233" height="82" />
        <rect x="1044" y="230" rx="0" ry="0" width="2" height="300" />
        <rect x="829" y="528" rx="0" ry="0" width="216" height="2" />
        <rect x="12" y="1" rx="0" ry="0" width="2" height="372" />
        <rect x="278" y="3" rx="0" ry="0" width="2" height="372" />
        <rect x="11" y="1" rx="0" ry="0" width="268" height="2" />
        <rect x="11" y="373" rx="0" ry="0" width="268" height="2" />
        <circle cx="143" cy="123" r="66" />
        <rect x="12" y="2" rx="0" ry="0" width="268" height="51" />
        <rect x="45" y="192" rx="0" ry="0" width="198" height="11" />
        <rect x="85" y="228" rx="0" ry="0" width="114" height="11" />
        <rect x="31" y="265" rx="0" ry="0" width="233" height="82" />
        <rect x="577" y="3" rx="0" ry="0" width="2" height="372" />
        <rect x="843" y="5" rx="0" ry="0" width="2" height="372" />
        <rect x="576" y="3" rx="0" ry="0" width="268" height="2" />
        <rect x="576" y="375" rx="0" ry="0" width="268" height="2" />
        <circle cx="708" cy="125" r="66" />
        <rect x="578" y="4" rx="0" ry="0" width="268" height="51" />
        <rect x="610" y="194" rx="0" ry="0" width="198" height="11" />
        <rect x="650" y="230" rx="0" ry="0" width="114" height="11" />
        <rect x="596" y="267" rx="0" ry="0" width="233" height="82" />
      </ContentLoader>
    </div>
  );
};

export default BowlsLoader;
