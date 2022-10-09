// @ts-nocheck
import { error } from '@sveltejs/kit';
import data from '../../../../data/Classes_SP23_IU.json';
import { stringSimilarity } from './fuzzySearch';

export function load({ params }) {
    let classrooms = new Array;

    for (var i in data)
        for (var j in data[i].instructors) {
            if (stringSimilarity(params.slug, data[i].instructors[j].name) > 0.75) {
                let classroom = new Object;
                classroom[data[i].instructors[j].name] = [data[i].catalog_nbr + " " + data[i].subject, data[i].meetings]
                // classroom = data[i]
                classrooms.push(classroom)
                console.log(data[i].instructors[j].name + " / " + params.slug + " : " + stringSimilarity(params.slug, data[i].instructors[j].name));
            }
        }

    return {
        title: params.slug,
        content: "Classes:",
        classes: classrooms
    };
}