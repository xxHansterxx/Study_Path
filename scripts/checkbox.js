document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll(".checklist");

    checkboxes.forEach((checkbox) => {

        // Restore saved value
        checkbox.checked =
            localStorage.getItem(checkbox.id) === "true";

        // Save new value
        checkbox.addEventListener("change", () => {

            localStorage.setItem(
                checkbox.id,
                checkbox.checked
            );

        });

    });

});