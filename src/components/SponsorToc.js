import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import sponsors from "../data/sponsor";

export function SponsorToc() {
  var tops = sponsors.filter((u) => u.id === 1);

  return (
    <></>
  );
}

const sponsorItemStyle = {
  display: "block",
  position: "relative",
  alignItems: "center",
  boxSizing: "border-box",
};

const sponsorTagStyle = {
  position: "absolute",
  display: "block",
  right: 0,
  bottom: 0,
  zIndex: 5,
  fontSize: 12,
  backgroundColor: "rgba(0,0,0,0.8)",
  padding: "0 5px",
};

export function SponsorItem({picture, url, last, title, top, tag, style}) {
  return (
    <a
      href={url}
      target="_blank"
      title={title}
      style={{
        ...sponsorItemStyle,
        marginBottom: last ? null : "0.5em",
        border: top ? "2px solid rgb(255, 176, 46)" : undefined,
        ...style,
      }}
    >
      <img
        src={useBaseUrl(picture)}
        style={{display: "block", width: "100%"}}
        loading="lazy"
      />
      {top && (
        <span style={{position: "absolute", zIndex: 10, top: -16, right: -8}}>
          👑
        </span>
      )}
      <span style={sponsorTagStyle}>{tag}</span>
    </a>
  );
}

const sponsorSmartStyle = {
  display: "inline-block",
  width: "48.5%",
  position: "relative",
  boxSizing: "border-box",
};

export function SponsorItemSmart({picture, url, title, tag, i}) {
  return (
    <a
      href={url}
      target="_blank"
      title={title}
      style={{...sponsorSmartStyle, marginRight: i % 2 !== 0 ? 0 : 8}}
    >
      <img
        src={useBaseUrl(picture)}
        style={{display: "block", width: "100%"}}
        loading="lazy"
      />
    </a>
  );
}
