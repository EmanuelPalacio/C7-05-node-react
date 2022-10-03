import styles from '../styles/countDown.module.css';

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-explicit-any
export const SVGCircle = ({ radius }: any) => (
  <svg className={styles.countdown_svg}>
    <path fill='none' stroke='#0F4C75' strokeWidth='4' d={describeArc(50, 50, 48, 0, radius)} />
  </svg>
);

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');

  return d;
}
