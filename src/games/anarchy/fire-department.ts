// This is a class to represent the FireDepartment object in the game.
// If you want to render it in the game do so here.
import { MenuItems } from "src/core/ui/context-menu";
import { IDeltaReason } from "src/viseur/game";
import { Building } from "./building";
import { Game } from "./game";
import { IBuildingState, IFireDepartmentState } from "./state-interfaces";

// <<-- Creer-Merge: imports -->>
// any additional imports you want can be added here safely between Creer runs
// <<-- /Creer-Merge: imports -->>

/**
 * An object in the game. The most basic class that all game classes should
 * inherit from automatically.
 */
export class FireDepartment extends Building {

    /** The instance of the game this game object is a part of */
    public readonly game: Game;

    /** The current state of the FireDepartment (dt = 0) */
    public current: IFireDepartmentState;

    /** The next state of the FireDepartment (dt = 1) */
    public next: IFireDepartmentState;

    // <<-- Creer-Merge: variables -->>
    /** beam color name override to change the beam's color */
    protected beamColorName = "#00BFFF";
    // <<-- /Creer-Merge: variables -->>

    /**
     * Constructor for the FireDepartment with basic logic as provided by the Creer
     * code generator. This is a good place to initialize sprites and constants.
     * @param state the initial state of this FireDepartment
     * @param game the game this FireDepartment is in
     */
    constructor(state: IFireDepartmentState, game: Game) {
        super(state, game);

        // <<-- Creer-Merge: constructor -->>
        // initialization logic goes here
        // <<-- /Creer-Merge: constructor -->>
    }

    /**
     * change this to return true to actually render instances of super classes
     * @returns true if we should render game object classes of this instance,
     *          false otherwise which optimizes playback speed
     */
    public shouldRender(): boolean {
        // <<-- Creer-Merge: should-render -->>
        return false; // change this to true to render all instances of this class
        // <<-- /Creer-Merge: should-render -->>
    }

    /**
     * Called approx 60 times a second to update and render FireDepartment
     * instances. Leave empty if it is not being rendered.
     * @param dt a floating point number [0, 1) which represents how
     * far into the next turn that current turn we are rendering is at
     * @param current the current (most) state, will be this.next if
     * this.current is undefined
     * @param next the next (most) state, will be this.current if
     * this.next is undefined
     * @param reason the reason for the current delta
     * @param nextReason the reason for the next delta
     */
    public render(dt: number, current: IFireDepartmentState, next: IFireDepartmentState,
                  reason: IDeltaReason, nextReason: IDeltaReason): void {
        super.render(dt, current, next, reason, nextReason);

        // <<-- Creer-Merge: render -->>
        // render where the FireDepartment is
        // <<-- /Creer-Merge: render -->>
    }

    /**
     * Invoked after when a player changes their color, so we have a
     * chance to recolor this FireDepartment's sprites.
     */
    public recolor(): void {
        super.recolor();

        // <<-- Creer-Merge: recolor -->>
        // replace with code to recolor sprites based on player color
        // <<-- /Creer-Merge: recolor -->>
    }

    /**
     * Invoked when the state updates.
     * @param current the current (most) state, will be this.next if
     * this.current is undefined
     * @param next the next (most) game state, will be this.current if
     * this.next is undefined
     * @param reason the reason for the current delta
     * @param nextReason the reason for the next delta
     */
    public stateUpdated(current: IFireDepartmentState, next: IFireDepartmentState,
                        reason: IDeltaReason, nextReason: IDeltaReason): void {
        super.stateUpdated(current, next, reason, nextReason);

        // <<-- Creer-Merge: stateUpdated -->>
        // update the FireDepartment based on its current and next states
        // <<-- /Creer-Merge: stateUpdated -->>
    }

    // NOTE: past this block are functions only used 99% of the time if
    //       the game supports human playable clients (like Chess).
    //       If it does not, feel free to ignore everything past here.

    // <Joueur functions> --- functions invoked for human playable client

    /**
     * Bribes this FireDepartment to extinguish the some of the fire in a
     * building.
     * @param building The Building you want to extinguish.
     * @param callback The callback that eventually returns the return value
     * from the server. - The returned value is True if the bribe worked, false
     * otherwise.
     */
    public extinguish(building: IBuildingState, callback: (returned: boolean) => void): void {
        this.runOnServer("extinguish", {building}, callback);
    }

    // </Joueur functions>

    // <<-- Creer-Merge: public-functions -->>
    // You can add additional public functions here
    // <<-- /Creer-Merge: public-functions -->>

    /**
     * Invoked when the right click menu needs to be shown.
     * @returns an array of context menu items, which can be
     *          {text, icon, callback} for items, or "---" for a separator
     */
    protected getContextMenu(): MenuItems {
        const menu = super.getContextMenu();

        // <<-- Creer-Merge: getContextMenu -->>
        // add context items to the menu here
        // <<-- /Creer-Merge: getContextMenu -->>

        return menu;
    }

    // <<-- Creer-Merge: protected-private-functions -->>
    // You can add additional protected/private functions here
    // <<-- /Creer-Merge: protected-private-functions -->>
}
