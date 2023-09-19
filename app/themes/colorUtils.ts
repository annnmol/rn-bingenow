class ColorUtils {
  public static rgbaToHex = (rgba: string): string => {
    // Parse the RGBA values from the input string
    const match = rgba.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
    if (!match) {
      throw new Error("Invalid RGBA color format");
    }

    // Extract the red, green, and blue values
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    // Ensure the values are within valid ranges
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("Invalid RGBA color values");
    }

    // Convert the values to hex format
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    // Combine the values to form the 6-digit hex code
    const hexCode = `#${rHex}${gHex}${bHex}`;

    return hexCode;
  };

  // Function to convert hex color to RGBA
  // Define a function to generate a color with opacity
  public static hexToRgba = (color: string, opacity: number = 1) => {
    const hexColor = color?.replace(/^#/, "");
    const r = parseInt(hexColor?.slice(0, 2), 16);
    const g = parseInt(hexColor?.slice(2, 4), 16);
    const b = parseInt(hexColor?.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  public static getContrastTextColorRgb = (rbg: string) => {
    const [r, g, b, a] = rbg.match(/\d+/g)?.map(Number) ?? [];
    // Get YIQ ratio
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    const color = yiq >= 128 ? "#282828" : "#f1f1f1";
    // Check contrast
    return color;
  };

  public static getContrastTextColorVariants = (
    color: string
  ): Record<string, string> => {
    // Function to calculate the luminance of a color
    const getLuminance = (color: string): number => {
      const rgbaMatch = color.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
      if (rgbaMatch) {
        const r = parseInt(rgbaMatch[1], 10);
        const g = parseInt(rgbaMatch[2], 10);
        const b = parseInt(rgbaMatch[3], 10);

        // Calculate luminance using the relative luminance formula
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance;
      }

      // If the color is not in RGBA format, try converting it from hex to RGBA
      const hexColor = color.startsWith("#") ? this.rgbaToHex(color) : null;
      if (hexColor) {
        return getLuminance(hexColor);
      }

      throw new Error("Invalid color format");
    };

    // Determine whether the color is light or dark
    const luminance = getLuminance(color);
    const isLightColor = luminance > 128;

    // Define opacity values based on whether it's a light or dark color
    const opacityVariants: Record<string, string> = {
      main: isLightColor ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
      medium: isLightColor ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)",
      light: isLightColor ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
    };

    return opacityVariants;
  };

  public static getSameColorTextVariants = (
    primaryColor: string
  ): Record<string, string> => {
    // Check if the input is in hex format and convert it to RGBA if needed
    const primaryColorRgba = primaryColor.startsWith("#")
      ? this.hexToRgba(primaryColor)
      : primaryColor;

    // Define opacity values for variants
    const opacityVariants: Record<string, string> = {
      main: `rgba(${primaryColorRgba}, 0.87)`,
      medium: `rgba(${primaryColorRgba}, 0.6)`,
      light: `rgba(${primaryColorRgba}, 0.4)`,
    };

    return opacityVariants;
  };

  public static generateShades(
    startColor: string,
    endColor: string,
    numShades: number = 10
  ): string[] {
    // Check if startColor and endColor are in hex format and convert them to RGBA
    const startColorRGBA = startColor.startsWith("#")
      ? this.hexToRgba(startColor)
      : startColor;
    const endColorRGBA = endColor.startsWith("#")
      ? this.hexToRgba(endColor)
      : endColor;

    const shades: string[] = [];
    for (let i = 0; i < numShades; i++) {
      const progress = i / (numShades - 1); // Calculate the progress between 0 and 1
      const blendedColor = this.mixColors(
        startColorRGBA,
        endColorRGBA,
        progress
      );
      shades.push(blendedColor);
    }
    return shades;
  }

  public static mixColors = (
    color1: string,
    color2: string,
    opacity: number
  ): string => {
    const parseColor = (color: string) => {
      const rgbaMatch = color.match(
        /rgba?\((\d+), (\d+), (\d+)(, (\d+(\.\d+)?))?\)/
      );
      if (rgbaMatch) {
        return {
          r: parseInt(rgbaMatch[1], 10),
          g: parseInt(rgbaMatch[2], 10),
          b: parseInt(rgbaMatch[3], 10),
          a: rgbaMatch[5] ? parseFloat(rgbaMatch[5]).toFixed(2) : "1.00",
        };
      }
      throw new Error("Invalid color format");
    };

    const color1Parsed = parseColor(color1);
    const color2Parsed = parseColor(color2);

    const mixedColor = {
      r: Math.round(color1Parsed.r * (1 - opacity) + color2Parsed.r * opacity),
      g: Math.round(color1Parsed.g * (1 - opacity) + color2Parsed.g * opacity),
      b: Math.round(color1Parsed.b * (1 - opacity) + color2Parsed.b * opacity),
      a: color1Parsed.a, // Use the alpha of the first color
    };

    return `rgba(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b}, ${mixedColor.a})`;
  };
}
export default ColorUtils;
