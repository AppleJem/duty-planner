function generateCellList(tables, tableCount) {
    let cells = [];
    for (let i = 0; i < tableCount; i++) {
        //We're looping through the tables like this because if the user previously deleted any tables then added more, there will be some numbers in tableCount that don't correspond to any table
        if (tables[`table${i}`]) {
            for (let j = 0; j < tables[`table${i}`].timingsArr.length; j++) {
                for (let k = 0; k < tables[`table${i}`].headingsArr.length; k++) {
                    cells.push(`table${i}_${j}_${k}`);
                }
            }
        }
    }
    return cells;
}

//generate a snapshot of the table based on the cellList (taking each cell's latest state)
function getSnapshot(cellList) {
    let snapshotObj = {}
    for (let key in cellList) {
        let lastState = cellList[key].history.slice(-1)[0]
        snapshotObj[key] = {
            name: lastState.name,
            color: lastState.color
        }
    }
    return snapshotObj;
}

function generateNames (namelist) {
    let allNames = {};
    for (let i=0; i<namelist.length; i++) {
        allNames[i] = {
            name: namelist[i].name,
            color: namelist[i].color
        }
    }
    return allNames;
}

function generateHeadings(tables) {
    let allHeadings = {}
    for (let key in tables) {
        for (let heading of tables[key].headingsArr) {
            if (!allHeadings[heading]) {
                allHeadings[heading] = heading;
            }
        }
    }
    return allHeadings;
}

export { generateHeadings, generateCellList, getSnapshot, generateNames };