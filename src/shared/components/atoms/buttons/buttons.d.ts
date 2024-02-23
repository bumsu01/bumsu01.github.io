import { ValueOf } from "type-fest";

import {
  RADIO_BUTTON_PROP,
  CHECKBOX_BUTTON_PROP,
  ROUND_CHECKBOX_BUTTON_PROP,
  SWITCH_BUTTON_PROP,
  BUTTON_VARIANT,
  TEXT_BUTTON_PROP,
} from "./buttonConstants";

export type RadioButtonProp = ValueOf<typeof RADIO_BUTTON_PROP>;

export type CheckboxButtonProp = ValueOf<typeof CHECKBOX_BUTTON_PROP>;

export type RoundCheckboxButtonProp = ValueOf<
  typeof ROUND_CHECKBOX_BUTTON_PROP
>;

export type SwitchButtonProp = ValueOf<typeof SWITCH_BUTTON_PROP>;

export type ButtonVariant = ValueOf<typeof BUTTON_VARIANT>;

export type TextButtonProp = ValueOf<typeof TEXT_BUTTON_PROP>;
