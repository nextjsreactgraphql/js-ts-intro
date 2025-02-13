// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/

const isLocalServer =
  window.location.pathname.startsWith("/Users/nils") ||
  window.location.hostname.indexOf("localhost") !== -1 ||
  window.location.hostname.indexOf("127.0.0.1") !== -1;

Reveal.initialize({
  hash: true,
  // do not change url for each fragment that is visible
  fragmentInURL: false,

  // do not use fragments at all in 'public' version
  fragments: false,

  controls: true,
  progress: true,
  history: true,
  center: false,

  // no slide transitions by default
  transition: "none",
  controlsTutorial: true,

  // i need all space i can get
  width: 1900,
  height: 1200,

  // there's a bug with Firefox that does not show
  // the cursor again after is has been hidden, so disable
  hideInactiveCursor: false,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
}).then(() => {
  const isBeta = !!document.querySelector("[data-beta='true']");
  console.log("isBeta", isBeta);

  if (isLocalServer) {
    // only applies to presentation version

    // As a presenter I don't need controls but fragments
    Reveal.configure({ controls: false, fragments: true });

    // every 'li' should become a fragment
    document.querySelectorAll("li").forEach((n) => n.classList.add("fragment"));

    // ...but not really every (remove all 'fragments' from elements that are marked with 'no-fragment'
    //    and THEIR CHILDREN)
    document
      .querySelectorAll(".no-fragment, .no-fragment *")
      .forEach((n) => n.classList.remove("fragment"));

    // when using code blocks with markdown like this:
    //  ```java fragment
    //  the <code> elements gets the "fragment" class, but it needs
    //  to be on its parent <pre> element
    // document.querySelectorAll("code.fragment").forEach((n) => {
    //   n.classList.remove("fragment");
    //   n.parentNode.classList.add("fragment");
    // });
    // document.querySelectorAll("ul > li.fragment:first-of-type").forEach((n) => {
    //   n.classList.remove("fragment");
    //   n.parentNode.classList.add("fragment");
    // });
    // // surround all pre.fragment blocks with a 'div.fragment'
    // // (somehow this seems to work better with code fragments)
    // document.querySelectorAll("pre.fragment").forEach((n) => {
    //   n.classList.remove("fragment");
    //   const div = document.createElement("div");
    //   div.classList.add("fragment");
    //   n.parentNode.insertBefore(div, n);
    //   div.appendChild(n);

    const clipboard = document.getElementById("nils-clipboard");
    clipboard.addEventListener("click", () => {
      const githubUrl =
        "https://nilshartmann.github.io" +
        window.location.pathname +
        window.location.hash;
      console.log(githubUrl);
      navigator.clipboard.writeText(githubUrl);
    });

    clipboard.style.display = "block";

    // });
  } else {
    // public version

    if (!isBeta) {
      // remove presenter "demo" marks (children of demo)
      document.querySelectorAll(".demo .demo").forEach((n) => n.remove());
      // remove todos
      document.querySelectorAll(".todo").forEach((n) => n.remove());
    }
  }

  // Changes for both public and presenter version
  // li having a code inside, should not have a bullet point (see also styles.css)
  document.querySelectorAll("li > pre.code-wrapper").forEach((n) => {
    n.parentNode.classList.add("no-icon");
  });
  document.querySelectorAll("li > img").forEach((n) => {
    n.parentNode.classList.add("no-icon");
  });

  // open all externals link in new tab
  document.querySelectorAll('a:not([href^="#"])').forEach((i) => {
    i.setAttribute("target", "_blank");
  });

  // make all code editable
  document.querySelectorAll("pre code").forEach((n) => {
    n.setAttribute("contenteditable", "true");
    n.dataset.trim = "";
  });

  // small lists
  document.querySelectorAll("li.small").forEach((n) => {
    n.classList.remove("small");
    n.parentNode.classList.add("small");
    n.remove();
  });
});
