import { router } from "../router";

export abstract class HtmlUtil {
  static render(rootDiv: HTMLElement | null) {
    if (!rootDiv) {
      throw Error("Missing root element!");
    }

    // on init
    // -> navigate to routing
    const { pathname } = window.location;
    rootDiv.innerHTML = router[pathname];

    // List events
    HtmlUtil.addEventListeners(rootDiv);
  }

  private static addEventListeners(rootDiv: HTMLElement) {
    // capture elements
    const homeBtn: HTMLElement | null = document.getElementById("home");
    const usersBtn: HTMLElement | null = document.getElementById("users");
    const postsBtn: HTMLElement | null = document.getElementById("posts");

    // attach events
    if (homeBtn) {
      homeBtn.addEventListener("click", () => {
        HtmlUtil.navigate(rootDiv, "/");
      });
    }

    if (usersBtn) {
      usersBtn.addEventListener("click", () => {
        HtmlUtil.navigate(rootDiv, "/user");
      });
    }

    if (postsBtn) {
      postsBtn.addEventListener("click", () => {
        HtmlUtil.navigate(rootDiv, "/post");
      });
    }
  }

  private static navigate(rootDiv: HTMLElement, pathname: string) {
    const { origin } = window.location;
    const url = `${origin}${pathname}`;

    // to change url
    window.history.pushState({}, pathname, url);

    // to render content
    rootDiv.innerHTML = router[pathname];
  }
}
