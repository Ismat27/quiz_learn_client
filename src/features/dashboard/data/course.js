import crypto from "../../../images/crypto.png"
import ui from "../../../images/ui.png"
import frontend from "../../../images/frontend.png"
import backend from "../../../images/backend.png"
import skin from "../../../images/skin.png"
import mgt from "../../../images/mgt.png"
import history from "../../../images/history.png"
import herbs from "../../../images/herbs.png"

const courses = [
    {
        category: 'tech and mechanics',
        courses: [
            {
                id: 1,
                name: 'advanced cryptocurrency',
                price: 20000,
                image: crypto,
                sqp: 200,
            },
            {
                id: 2,
                name: 'uI/UX Design',
                price: 15000,
                image: ui,
                sqp: 150,
            },
            {
                id: 3,
                name: 'front-end development',
                price: 14000,
                image: frontend,
                sqp: 140,
            },
            {
                id: 4,
                name: 'back-end development',
                price: 15000,
                image: backend,
                sqp: 200,
            },
        ]
    },
    {
        category: 'history & health',
        courses: [
            {
                id: 1,
                name: 'skin care production',
                price: 7000,
                image: skin,
                sqp: 705,
            },
            {
                id: 2,
                name: 'page management',
                price: 10000,
                image: mgt,
                sqp: 100,
            },
            {
                id: 3,
                name: 'true africa history',
                price: 12000,
                image: history,
                sqp: 1208,
            },
            {
                id: 4,
                name: 'africa healing and herbs methodolgy',
                price: 6000,
                image: herbs,
                sqp: 700,
            },
        ]
    },
]

export { courses }