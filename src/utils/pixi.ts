import * as Color from "color";
import * as PIXI from "pixi.js";
import { euclideanDistance, IPoint } from "./math";

export type ColorTint = Color | number | string;

export interface IPixiSpriteOptions {
    /** The width to set the sprite to */
    width?: number;

    /** The height to set the sprite to */
    height?: number;

    /** The rotation to set the sprite to (in radians) */
    rotation?: number;

    /** The position of the sprite */
    position?: number | IPoint;

    /** The skew of the sprite */
    skew?: IPoint;

    /** The pivot position for the sprite */
    pivot?: number | IPoint;

    /** The color to tint the sprite */
    tint?: ColorTint;

    /** The relative pivot as either a single number used for the x and y, or the tuple */
    relativePivot?: number | IPoint;

    /** The alpha value (opacity) of the sprite */
    alpha?: number;

    /** A name to attach to the new sprite */
    name?: string;

    /** A callback for if this sprite is clicked */
    onClick?: () => void;

    /** if set toggles visibility */
    visible?: boolean;

    /** The anchor for this sprite */
    anchor?: number | IPoint;

    /** The scale, multiplied byt he current scale instead of static */
    relativeScale?: number | IPoint;
}

/**
 * Gets a tint number from a color like variable
 * @param color a color like variable, can be the number (passed through), string color name, or the Color instance
 * @returns a number that represents a color tint, such as 0xFF000 for red
 */
export function getTintFromColor(color: ColorTint): number {
    if (typeof(color) === "number") {
        return color;
    }
    else if (typeof(color) === "string") {
        return Color(color).rgbNumber();
    }
    else {
        return color.rgbNumber();
    }
}

/**
 * Sets the properties of a pixi sprite from an options interface
 * @param sprite the sprite to set properties on
 * @param options the options to set the properties from
 */
export function setPixiOptions(sprite: PIXI.Sprite, options: IPixiSpriteOptions): void {
    let x: number;
    let y: number;
    if (options.width !== undefined) {
        sprite.width = options.width;
    }

    if (options.height !== undefined) {
        sprite.height = options.height;
    }

    if (options.rotation !== undefined) {
        sprite.rotation = options.rotation;
    }

    if (options.position !== undefined) {
        if (typeof(options.position) === "number") {
            x = options.position;
            y = options.position;
        }
        else {
            x = options.position.x;
            y = options.position.y;
        }
        sprite.position.set(x, y);
    }

    if (options.skew !== undefined) {
        if (typeof(options.skew) === "number") {
            x = options.skew;
            y = options.skew;
        }
        else {
            x = options.skew.x;
            y = options.skew.y;
        }
        sprite.skew.set(x, y);
    }

    if (options.pivot !== undefined) {
        if (typeof(options.pivot) === "number") {
            x = options.pivot;
            y = options.pivot;
        }
        else {
            x = options.pivot.x;
            y = options.pivot.y;
        }
        sprite.pivot.set(x, y);
    }

    if (options.alpha !== undefined) {
        sprite.alpha = options.alpha;
    }

    if (options.tint !== undefined) {
        sprite.tint = getTintFromColor(options.tint);
    }

    if (options.relativePivot !== undefined) {
        if (typeof(options.relativePivot) === "number") {
            x = options.relativePivot;
            y = options.relativePivot;
        }
        else {
            x = options.relativePivot.x;
            y = options.relativePivot.y;
        }
        setRelativePivot(sprite, x, y);
    }

    if (options.alpha !== undefined) {
        sprite.alpha = options.alpha;
    }

    if (options.name !== undefined) {
        sprite.name = options.name;
    }

    if (options.onClick !== undefined) {
        sprite.interactive = true;
        sprite.on("mouseupoutside", options.onClick);
        sprite.on("mouseup", options.onClick);
        sprite.on("touchend", options.onClick);
        sprite.on("touchendoutside", options.onClick);
        sprite.on("rightup", options.onClick);
        sprite.on("rightupoutside", options.onClick);
    }

    if (options.visible !== undefined) {
        sprite.visible = options.visible;
    }

    if (options.relativeScale) {
        if (typeof(options.relativeScale) === "number") {
            x = options.relativeScale;
            y = options.relativeScale;
        }
        else {
            x = options.relativeScale.x;
            y = options.relativeScale.y;
        }

        sprite.scale.x *= x;
        sprite.scale.y *= y;
    }

    if (options.anchor) {
        if (typeof(options.anchor) === "number") {
            x = options.anchor;
            y = options.anchor;
        }
        else {
            x = options.anchor.x;
            y = options.anchor.y;
        }

        sprite.anchor.set(x, y);
    }
}

/**
 * Convenience function. Takes the Container's current scale into account when setting the pivot,
 * so you don't have to have pixel values
 * @param obj the display object to set the pivot for
 * @param relativeX a scalar based on the currently scaled width, so 0.5 is the center
 * @param relativeY a scalar based on the currently scaled height, so 0.5 is the middle
 * @returns the passing obj for chaining
 */
export function setRelativePivot(
    obj: PIXI.Container,
    relativeX: number = 0.5,
    relativeY: number = 0.5,
): PIXI.Container {
    obj.pivot.set(relativeX * obj.width / obj.scale.x, relativeY * obj.height / obj.scale.y);
    return obj;
}

/**
 * Takes a sprite a "stretches" it between two points along it's width, useful for beam type effects
 * @param {PIXI.Sprite} sprite the sprite to use. Assumed to be 1x1 units by default.
 *                             It's width and pivot will be scaled for the stretching
 * @param {IPoint} pointA the first point, an object with an {x, y} to derive coordinates from
 * @param {IPoint} pointB the second point, an object with an {x, y} to derive coordinates from
 */
export function renderSpriteBetween(sprite: PIXI.Sprite, pointA: IPoint, pointB: IPoint): void {
    const distance = euclideanDistance(pointA, pointB);
    sprite.width = distance;
    setRelativePivot(sprite, 0.5, 0.5);

    const angleRadians = Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x);
    sprite.rotation = angleRadians;

    const midX = (pointA.x + pointB.x) / 2;
    const midY = (pointA.y + pointB.y) / 2;
    sprite.position.set(midX + 0.5, midY + 0.5);
}