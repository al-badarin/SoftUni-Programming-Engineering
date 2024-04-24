export abstract class HtmlUtil {
  static render(rootDiv: HTMLElement | null) {
    if (!rootDiv) {
      throw Error("Missing root element!");
    }
  }
}
