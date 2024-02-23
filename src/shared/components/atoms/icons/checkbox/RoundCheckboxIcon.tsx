import { RoundCheckboxButtonProp, ROUND_CHECKBOX_BUTTON_PROP } from '../../buttons';

const { NORMAL, ACTIVE, DISABLED } = ROUND_CHECKBOX_BUTTON_PROP;

const generateRectFill = (state: RoundCheckboxButtonProp) => {
  if (state === NORMAL) return '#CED4D9';
  if (state === ACTIVE) return '#7344E5';
  if (state === DISABLED) return '#F0F0F3';
  return '';
};

export default function RoundCheckboxIcon({ state }: { state: RoundCheckboxButtonProp }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill={generateRectFill(state)} />
      <path
        d="M17.3337 8L10.0003 15.3333L6.66699 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
