export function initialize(links) {
    const main = document.querySelector('main');
    document.querySelector('nav').addEventListener('click', onNavigate);

    const context = {
        showSection,
        goto
    };

    return context;

    function showSection(section) {
        main.replaceChildren(section);
    }

    function onNavigate(event) {
        let target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            goto(url.pathname);
        }
    }

    function goto(name) {
        const handler = links[name];
        if (typeof handler == 'function') {
            handler(context);
        }
    }
}