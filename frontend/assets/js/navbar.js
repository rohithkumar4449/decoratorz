const observeDOM = (callback) => {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (
                document.getElementById('search-input-desktop') &&
                document.getElementById('search-input-mobile')
            ) {
                observer.disconnect(); // Stop observing once the elements are found
                callback();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

observeDOM(() => {
    const placeholders = [
        "Search by Birthday party...",
        "Search by Anniversary party...",
        "Search by Festivals...",
        "Search by Surprises...",
        "Search by Decorations..."
    ];

    const desktopInput = document.getElementById('search-input-desktop');
    const mobileInput = document.getElementById('search-input-mobile');
    let currentIndex = 0;

    setInterval(() => {
        const newPlaceholder = ` ${placeholders[currentIndex]}`;
        if (desktopInput) desktopInput.placeholder = newPlaceholder;
        if (mobileInput) mobileInput.placeholder = newPlaceholder;
        currentIndex = (currentIndex + 1) % placeholders.length;
    }, 1200);
});
