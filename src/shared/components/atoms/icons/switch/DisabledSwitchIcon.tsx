import { SWITCH_BUTTON_PROP, SwitchButtonProp } from "../../buttons";

const { ON } = SWITCH_BUTTON_PROP;

export default function DisabledSwitchIcon({
  state,
}: {
  state: SwitchButtonProp;
}) {
  const { rectFill, circleCx } =
    state === ON
      ? {
          rectFill: "url(#gradient)",
          circleCx: "26",
        }
      : {
          rectFill: "#CED4D9",
          circleCx: "10",
        };

  return (
    <svg
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="25%" stopColor="#7344E5" />
          <stop offset="75%" stopColor="#AB6EF5" />
        </linearGradient>
      </defs>
      <g opacity="0.6">
        <rect width="36" height="20" rx="10" fill={rectFill} />
        <circle cx={circleCx} cy="10" r="8" fill="white" />
      </g>
    </svg>
  );
}
