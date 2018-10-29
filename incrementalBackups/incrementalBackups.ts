function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {

    const fileIds: number[] = [];

    for(let change of changes) {
        // setup fileId and backupTime 
        const fileBackupTime = change[0];
        const fileId = change[1];

       // check if the date backed up is
       // greater than last date backed up
        if (fileBackupTime > lastBackupTime) {
            // check if we already have the fileId
            if (!fileIds.includes(fileId))
                fileIds.push(fileId);
       } 
    }

    // sorts the fileIds
    return fileIds.sort((fileId1, fileId2) => fileId1 - fileId2);
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));

    /**
     * Make it faster:
     *  - use objects instead of using .includes()
     */
