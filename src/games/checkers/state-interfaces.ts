// These are the interfaces for all the states in this game
import { IBaseGame, IBaseGameObject, IBasePlayer } from "cadre-ts-utils/cadre";

// This is a file generated by the Creer, it may have empty interfaces,
// but we need them, so let's disable that tslint rule
// tslint:disable:no-empty-interface

/**
 * The simple version of American Checkers. An 8x8 board with 12 checkers on
 * each side that must move diagonally to the opposing side until kinged.
 */
export interface IGameState extends IBaseGame {
    /**
     * The height of the board for the Y component of a checker.
     */
    boardHeight: number;

    /**
     * The width of the board for X component of a checker.
     */
    boardWidth: number;

    /**
     * The checker that last moved and must be moved because only one checker
     * can move during each players turn.
     */
    checkerMoved: ICheckerState;

    /**
     * If the last checker that moved jumped, meaning it can move again.
     */
    checkerMovedJumped: boolean;

    /**
     * All the checkers currently in the game.
     */
    checkers: ICheckerState[];

    /**
     * The player whose turn it is currently. That player can send commands.
     * Other players cannot.
     */
    currentPlayer: IPlayerState;

    /**
     * The current turn number, starting at 0 for the first player's turn.
     */
    currentTurn: number;

    /**
     * A mapping of every game object's ID to the actual game object. Primarily
     * used by the server and client to easily refer to the game objects via ID.
     */
    gameObjects: {[id: string]: IGameObjectState};

    /**
     * The maximum number of turns before the game will automatically end.
     */
    maxTurns: number;

    /**
     * List of all the players in the game.
     */
    players: IPlayerState[];

    /**
     * A unique identifier for the game instance that is being played.
     */
    session: string;

    /**
     * The amount of time (in nano-seconds) added after each player performs a
     * turn.
     */
    timeAddedPerTurn: number;

}

/**
 * A checker on the game board.
 */
export interface ICheckerState extends IGameObjectState {
    /**
     * If the checker has been kinged and can move backwards.
     */
    kinged: boolean;

    /**
     * The player that controls this Checker.
     */
    owner: IPlayerState;

    /**
     * The x coordinate of the checker.
     */
    x: number;

    /**
     * The y coordinate of the checker.
     */
    y: number;

}

/**
 * An object in the game. The most basic class that all game classes should
 * inherit from automatically.
 */
export interface IGameObjectState extends IBaseGameObject {
    /**
     * String representing the top level Class that this game object is an
     * instance of. Used for reflection to create new instances on clients, but
     * exposed for convenience should AIs want this data.
     */
    gameObjectName: string;

    /**
     * A unique id for each instance of a GameObject or a sub class. Used for
     * client and server communication. Should never change value after being
     * set.
     */
    id: string;

    /**
     * Any strings logged will be stored here. Intended for debugging.
     */
    logs: string[];

}

/**
 * A player in this game. Every AI controls one player.
 */
export interface IPlayerState extends IGameObjectState, IBasePlayer {
    /**
     * All the checkers currently in the game owned by this player.
     */
    checkers: ICheckerState[];

    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType: string;

    /**
     * If the player lost the game or not.
     */
    lost: boolean;

    /**
     * The name of the player.
     */
    name: string;

    /**
     * This player's opponent in the game.
     */
    opponent: IPlayerState;

    /**
     * The reason why the player lost the game.
     */
    reasonLost: string;

    /**
     * The reason why the player won the game.
     */
    reasonWon: string;

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    timeRemaining: number;

    /**
     * If the player won the game or not.
     */
    won: boolean;

    /**
     * The direction your checkers must go along the y-axis until kinged.
     */
    yDirection: number;

}
