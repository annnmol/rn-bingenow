import Color from "color";

class ColorUtils {
  public static getColor(hexCode: string, alpha: number = 1): string {
    const color = Color(hexCode).alpha(alpha);
    const rgba = color.rgb().string();
    return rgba;
  }

  public static getContrastColor(hexCode: string, alpha: number = 1): string {
    const color = Color(hexCode);
    const contrastColor = color.isDark() ? "#1b1e24" : "#f0f0f5";
    const result = this.getColor(contrastColor, alpha);
    return result;
  }
}
export default ColorUtils;
