import { useState } from "react";

export function useTiltEffect(cardRef, glowRef) {
  const [bounds, setBounds] = useState(null);

  function handleMouseEnter() {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
    }
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    const glow = glowRef?.current;
    if (card) card.style.transform = "";
    if (glow) glow.style.backgroundImage = "";
    setBounds(null);
  }

  function handleMouseMove(e) {
    const card = cardRef.current;
    const glow = glowRef?.current;
    if (!card || !bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;

    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${-center.y / 100},
        ${center.x / 100},
        0,
        ${Math.log(distance) * 8}deg
      )
    `;

    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
rgb(0, 0, 0),
#ffffff
        )
      `;
    }
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
