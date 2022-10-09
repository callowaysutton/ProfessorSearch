// @ts-nocheck

import data from '../../data/Classes_SP23_IU.json';

export function getProfessors() {
    var professors = new Array();
    for (var i in data)
        for (var j in data[i].instructors)
            professors.push(data[i].instructors[j].name);
    return new Set(professors);
}