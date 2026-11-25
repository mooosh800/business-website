import type { CSSProperties } from 'react';
import { themeConfig } from '../config/theme';

const stars = Array.from({ length: themeConfig.starCount }, (_, index) => ({
  left: `${(index * 137.508) % 100}%`,
  top: `${(index * 61.8 + 17) % 100}%`,
  size: index % 11 === 0 ? 2.6 : index % 3 === 0 ? 1.6 : 1,
  duration: `${3 + (index % 7) * 0.65}s`,
  delay: `${(index % 9) * -0.55}s`,
  opacity: index % 4 === 0 ? 0.72 : 0.36,
}));

export function Starfield() {
  return (
    <div aria-hidden="true" className="star-field">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star-dot"
          style={
            {
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--twinkle-duration': star.duration,
              '--twinkle-delay': star.delay,
              '--twinkle-opacity': star.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
