"use client";
import { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";
import Container from "../ui/Container";

export const Count = () => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    let currentValue = 0;
    const totalDuration = 5000; // 3 saniye
    const steps = 100; // 0'dan 100'e kadar
    const intervalTime = totalDuration / steps; // Her adımda bekleme süresi

    const interval = setInterval(() => {
      currentValue += 1;
      setValue(currentValue.toString());

      if (currentValue >= 100) {
        clearInterval(interval); // Değer 100'e ulaştığında interval'i temizle
      }
    }, intervalTime);

    return () => clearInterval(interval); // Component unmount olursa temizle
  }, []);

  return (
    <div className="h-64 w-full flex justify-center items-center scale-[5]">
      <FlipNumbers
        height={12}
        width={12}
        color="white"
        background="transparent"
        play
        perspective={100}
        numbers={value}
      />
    </div>
  );
};
