export const smoothScroll = (target) => {
    const currentPath = window.location.pathname;
    const targetPath = target.split('#')[0];
    if (currentPath !== targetPath) {
        window.location.href = target;
    } else {
        const element = document.querySelector(`#${target.split('#')[1]}`);
        if (element) {
            const offset = 64; // Adjust this value based on your menu bar height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
};

// Function to handle smooth scrolling on page load with a delay
export const scrollToAnchorOnLoad = () => {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const offset = 64; // Adjust this value based on your menu bar height
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 1);
    }
};