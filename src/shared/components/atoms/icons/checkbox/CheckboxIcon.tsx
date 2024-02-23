import { CheckboxButtonProp, CHECKBOX_BUTTON_PROP } from '../../buttons';

const { NORMAL, ACTIVE, DISABLED } = CHECKBOX_BUTTON_PROP;

const generatePathStroke = (state: CheckboxButtonProp) => {
  if (state === NORMAL) return '#CED4D9';
  if (state === ACTIVE) return '#7344E5';
  if (state === DISABLED) return '#F0F0F3';
  return '';
};

export default function CheckboxIcon({ state }: { state: CheckboxButtonProp }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.59961 12.3059L10.6496 16.3559L17.3996 8.25586"
        stroke={generatePathStroke(state)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
