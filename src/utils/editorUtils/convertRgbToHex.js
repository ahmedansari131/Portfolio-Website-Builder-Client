function rgb2hex(color) {
  let match;
  let isRGBA = false;

  // Check if the input color is RGBA
  if (color.includes('rgba')) {
    match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    isRGBA = true;
  }
  // If not RGBA, assume it's RGB
  else {
    match = color.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)\)$/);
  }

  if (!match) {
    // Return an empty string if the color format is invalid
    return "";
  }

  let red = parseInt(match[1], 10);
  let green = parseInt(match[2], 10);
  let blue = parseInt(match[3], 10);

  // If RGBA, calculate weighted color components
  if (isRGBA) {
    let alpha = parseFloat(match[4]);
    red = Math.round(red * alpha + (1 - alpha) * 255);
    green = Math.round(green * alpha + (1 - alpha) * 255);
    blue = Math.round(blue * alpha + (1 - alpha) * 255);
  }

  // Convert RGB components to hexadecimal
  let hex = "#" +
    ("0" + red.toString(16)).slice(-2) +
    ("0" + green.toString(16)).slice(-2) +
    ("0" + blue.toString(16)).slice(-2);

  return hex;
}

export {
  rgb2hex
}

