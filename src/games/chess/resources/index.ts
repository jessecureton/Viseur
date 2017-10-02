import { createResources, load } from "src/viseur/renderer";

export const GameResources = createResources("Chess", {
    // <<-- Creer-Merge: resources -->>
    piecesTop: load("pieces-top.png", {sheet: {width: 3, height: 2, axis: "x"}}),
    piecesBottom: load("pieces-bottom.png", {sheet: {width: 3, height: 2, axis: "x"}}),

    tileWhite: load("tile-white.png"),
    tileBlack: load("tile-black.png"),
    // <<-- /Creer-Merge: resources -->>
});