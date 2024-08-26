// main.js
const cubes = document.querySelectorAll('.cube');
let isDragging = false;
let startX, currentX;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    cube.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        // Update cube position (e.g., translateX(deltaX))
        cube.style.transform = `translateX(${deltaX}px)`;
        currentX = e.clientX;
    });

    cube.addEventListener('mouseup', () => {
        isDragging = false;
        // Handle any additional logic (e.g., snap to grid, check boundaries)
    });
});
