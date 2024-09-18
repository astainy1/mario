//Get element


function build() {
    const number = parseInt(document.getElementById('blockNumber').value);
    const marioBlocks = document.getElementById('marioBlocks');

    // Clear previous blocks
    marioBlocks.innerHTML = '';

    if (number < 1 || number > 8) {
        alert('Number must be between 1 and 8');
        return;
    }

    for (let row = 1; row <= number; row++) {
        const leftRow = document.createElement('div');
        const rightRow = document.createElement('div');

        for (let i = 0; i < row; i++) {
            leftRow.innerHTML += `<div class="block"></div>`;
            rightRow.innerHTML += `<div class="block"></div>`;
        }

        // Center the rows
        leftRow.style.textAlign = 'center';
        rightRow.style.textAlign = 'center';

        // Add rows to the container
        marioBlocks.appendChild(leftRow);
        marioBlocks.appendChild(rightRow);
    }
}
