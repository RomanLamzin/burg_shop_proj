const element = document.querySelector("#accordeon");

createAccordeon(element);

function createAccordeon(element, config) {
    let lastActive;


    element.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.classList.contains("menu-acco__trigger")) {
            if (lastActive) {
                lastActive.classList.remove("open");
            }

            lastActive = e.target.parentNode;
            lastActive.classList.add("open");
        }
    });

    if (!config) {
        return;
    }

    
}
