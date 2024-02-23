import { RADIO_BUTTON_PROP, RadioButtonProp } from "../../buttons";

const { NORMAL, ACTIVE, DISABLED } = RADIO_BUTTON_PROP;

const generateRectFill = (state: RadioButtonProp) => {
  if (state === NORMAL) return "#CED4D9";
  if (state === ACTIVE) return "#7344E5";
  if (state === DISABLED) return "#F0F0F3";
  return "";
};

export default function RadioIcon({ state }: { state: RadioButtonProp }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="10"
        fill={generateRectFill(state)}
      />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  );
}
