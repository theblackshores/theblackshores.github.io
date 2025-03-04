(async function() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const inBuildingTextEl = document.querySelector('#in-building-text');

    while (true) {
        inBuildingTextEl.textContent = 'In Building...';
        await sleep(1000);

        inBuildingTextEl.textContent = 'In Building ..';
        await sleep(1000);

        inBuildingTextEl.textContent = 'In Building  .';
        await sleep(1000);

        inBuildingTextEl.textContent = 'In Building   ';
        await sleep(1000);

        inBuildingTextEl.textContent = 'In Building.  ';
        await sleep(1000);

        inBuildingTextEl.textContent = 'In Building.. ';
        await sleep(1000);
    }
})();