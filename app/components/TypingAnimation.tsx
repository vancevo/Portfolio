"use client";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

type TypeProps = (string | number)[]; // including ['name', 'time']

export default function TypingAnimation({ data }: { data: TypeProps }) {
  return (
    <TypeAnimation
      sequence={data}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block", color: "#45505b" }}
      repeat={Infinity}
    />
  );
}
