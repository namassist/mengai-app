export default function ProgressBar({
  value,
  classes,
  color,
}: {
  value: string;
  classes: string;
  color: string;
}) {
  return (
    <div>
      <div className="relative">
        <div
          className={`flex items-center justify-center rounded-full ${classes}`}
        >
          <svg
            className="transform"
            width="160"
            height="160"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              className="stroke-current text-neutral-300"
              stroke-width="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              className={`stroke-current ${color}`}
              stroke-width="10"
              stroke-dasharray="283"
              stroke-dashoffset={`calc(283 - (283 * ${value}) / 100)`}
            />
            <text
              x="50"
              y="50"
              className={`text-xl font-bold ${color}`}
              fill="currentColor"
              dy=".3em"
              text-anchor="middle"
            >
              {value} %
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
