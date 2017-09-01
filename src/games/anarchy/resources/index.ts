import { createResources, load } from "src/viseur/renderer";

export const GameResources = createResources({
    // <<-- Creer-Merge: settings -->>
    tile: load("tile.jpg"),

    building: load("building_building.png"),
    dead: load("building_dead.png"),

    warehouseFront: load("building_warehouse_front.png"),
    policeDepartmentFront: load("building_policedepartment_front.png"),
    weatherStationFront: load("building_weatherstation_front.png"),
    fireDepartmentFront: load("building_firedepartment_front.png"),

    warehouseBack: load("building_warehouse_back.png"),
    policeDepartmentBack: load("building_policedepartment_back.png"),
    weatherStationBack: load("building_weatherstation_back.png"),
    fireDepartmentBack: load("building_firedepartment_back.png"),

    graffiti0: load("graffiti_1.png"),
    graffiti1: load("graffiti_2.png"),

    beam: load("beam.png"),
    arrow: load("arrow.png"),
    // this sprite is 2x2, not 1x1 like most
    rotation: load("rotation.png", {width: 2, height: 2}),

    // we want 1,0 to be 1, then 2,0 to be 2, ..., then 1,0 to be 4
    fire: load("fire.png", {sheet: {width: 4, height: 2, axis: "x"}}),
    // <<-- /Creer-Merge: settings -->>
});
