export const Colors = {
  blueberry: "#7344e5",
  blueberryShade: "#33277a",
  blueberryTone: "#4d3bb8",
  blueberryTint: "#b3a7fa",
  blueberryTintPlus: "#dbd6ff",

  lemonZest: "#ffee44",
  lemonZestShade: "#807722",
  lemonZestTone: "#bfb333",
  lemonZestTint: "#fff7a2",

  red: "#ff3700",
  redShade: "#801c00",
  redTone: "#bf2900",
  redTint: "#ff9b80",

  coral: "#ff896f",
  coralShade: "#804538",
  coralTone: "#bf6753",
  coralTint: "#ffc4b7",

  turquoise: "#28d0d5",
  turquoiseShade: "#14686a",
  turquoiseTone: "#1e9ca0",
  turquoiseTint: "#93e7ea",

  skyblue: "#49d1fc",
  skyblueShade: "#24687e",
  skyblueTone: "#379dbd",
  skyblueTint: "#a4e8fe",

  bk00: "#000000",
  bk01: "#0a0b0c",
  bk02: "#18161d",
  bk03: "#2a2c3d",
  bk04: "#272430",
  bk05: "#2a2731",
  bk06: "#2c2a30",
  bk07: "#18171C",

  grey01: "#3C444B",
  grey02: "#404C5A",
  grey03: "#454054",
  grey04: "#61676E",
  grey05: "#999999",
  grey06: "#CED4D9",
  grey07: "#D7DADC",
  grey08: "#F0F0F3",
  grey09: "#F7F8F8",

  white: "#ffffff",

  deepPurple: "#4D4461",
  deepBlue: "rgba(77,59,184,0.3)",
} as const;

const opacityToHex = {
  "100": "FF",
  "95": "F2",
  "90": "E6",
  "85": "D9",
  "80": "CC",
  "75": "BF",
  "70": "B3",
  "65": "A6",
  "60": "99",
  "55": "8C",
  "50": "80",
  "45": "73",
  "40": "66",
  "35": "59",
  "30": "4D",
  "25": "40",
  "24": "3D",
  "20": "33",
  "15": "26",
  "10": "1A",
  "5": "0D",
  "0": "00",
};

export const OpacityColors = {
  blueberryOp24: Colors.blueberry + opacityToHex[24],
  blueberryTintOp25: Colors.blueberryTint + opacityToHex[25],

  bk01Op90: Colors.bk01 + opacityToHex[90],
  bk01Op70: Colors.bk01 + opacityToHex[70],

  bk01Op20: Colors.bk01 + opacityToHex[20],
  bk01Op30: Colors.bk01 + opacityToHex[30],
  bk03Op60: Colors.bk03 + opacityToHex[60],

  grey01Op50: Colors.grey01 + opacityToHex[50],
  grey040p50: Colors.grey04 + opacityToHex[50],
  grey06Op20: Colors.grey06 + opacityToHex[20],

  whiteOp20: Colors.white + opacityToHex[20],
  whiteOp50: Colors.white + opacityToHex[50],
};

export const gradientColors = {
  gradient01: "linear-gradient(270deg, #AB6EF5 0%, #7344E5 100%)",
  gradient02: `linear-gradient(180deg, rgba(255, 255, 255, 0) 81.65%, #FFFFFF 100%),
                 linear-gradient(180deg, rgba(57, 57, 57, 0) 58.2%, rgba(64, 64, 64, 0.2) 100%),
                 #7344E5;`,
  gradient03: `linear-gradient(180deg, #FFED44 0%, #FFE600 100%)`,
};
