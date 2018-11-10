// These are the interfaces for all the states in this game
import { IBaseGameObjectState, IBaseGameState, IBasePlayerState } from "src/viseur/game";

// This is a file generated by the Creer, it may have empty interfaces,
// but we need them, so let's disable that tslint rule
// tslint:disable:no-empty-interface

/**
 * Combine elements and be the first scientists to create fusion.
 */
export interface IGameState extends IBaseGameState {
    /**
     * The percent of max HP regained when a unit end their turn on a tile owned
     * by their player.
     */
    readonly RegenerateRate: number;

    /**
     * The player whose turn it is currently. That player can send commands.
     * Other players cannot.
     */
    readonly currentPlayer: IPlayerState;

    /**
     * The current turn number, starting at 0 for the first player's turn.
     */
    readonly currentTurn: number;

    /**
     * A mapping of every game object's ID to the actual game object. Primarily
     * used by the server and client to easily refer to the game objects via ID.
     */
    readonly gameObjects: {[id: string]: IGameObjectState};

    /**
     * The maximum number of interns a player can have.
     */
    readonly internCap: number;

    /**
     * A list of all jobs. first item is intern, second is physicists, and third
     * is manager.
     */
    readonly jobs: IJobState[];

    /**
     * Every Machine in the game.
     */
    readonly machines: IMachineState[];

    /**
     * The maximum number of managers a player can have.
     */
    readonly managerCap: number;

    /**
     * The number of Tiles in the map along the y (vertical) axis.
     */
    readonly mapHeight: number;

    /**
     * The number of Tiles in the map along the x (horizontal) axis.
     */
    readonly mapWidth: number;

    /**
     * The number of materials that spawn per spawn cycle.
     */
    readonly materialSpawn: number;

    /**
     * The maximum number of turns before the game will automatically end.
     */
    readonly maxTurns: number;

    /**
     * The maximum number of physicists a player can have.
     */
    readonly physicistCap: number;

    /**
     * List of all the players in the game.
     */
    readonly players: IPlayerState[];

    /**
     * The amount of victory points added when a refined ore is consumed by the
     * generator.
     */
    readonly refinedValue: number;

    /**
     * A unique identifier for the game instance that is being played.
     */
    readonly session: string;

    /**
     * The amount of turns it takes a unit to spawn.
     */
    readonly spawnTime: number;

    /**
     * The amount of turns a unit cannot do anything when stunned.
     */
    readonly stunTime: number;

    /**
     * All the tiles in the map, stored in Row-major order. Use `x + y *
     * mapWidth` to access the correct index.
     */
    readonly tiles: ITileState[];

    /**
     * The amount of time (in nano-seconds) added after each player performs a
     * turn.
     */
    readonly timeAddedPerTurn: number;

    /**
     * The number turns a unit is immune to being stunned.
     */
    readonly timeImmune: number;

    /**
     * Every Unit in the game.
     */
    readonly units: IUnitState[];

    /**
     * The amount of combined heat and pressure that you need to win.
     */
    readonly victoryAmount: number;

}

/**
 * An object in the game. The most basic class that all game classes should
 * inherit from automatically.
 */
export interface IGameObjectState extends IBaseGameObjectState {
    /**
     * String representing the top level Class that this game object is an
     * instance of. Used for reflection to create new instances on clients, but
     * exposed for convenience should AIs want this data.
     */
    readonly gameObjectName: string;

    /**
     * A unique id for each instance of a GameObject or a sub class. Used for
     * client and server communication. Should never change value after being
     * set.
     */
    readonly id: string;

    /**
     * Any strings logged will be stored here. Intended for debugging.
     */
    readonly logs: string[];

}

/**
 * Information about a unit's job.
 */
export interface IJobState extends IGameObjectState {
    /**
     * How many combined resources a unit with this Job can hold at once.
     */
    readonly carryLimit: number;

    /**
     * The amount of damage this Job does per attack.
     */
    readonly damage: number;

    /**
     * The amount of starting health this Job has.
     */
    readonly health: number;

    /**
     * The number of moves this Job can make per turn.
     */
    readonly moves: number;

    /**
     * The Job title. 'intern', 'manager', or 'physicist'.
     */
    readonly title: string;

}

/**
 * A machine in the game. Used to refine ore.
 */
export interface IMachineState extends IGameObjectState {
    /**
     * What type of ore the machine takes it. Also determines the type of
     * material it outputs. (redium or blueium).
     */
    readonly oreType: string;

    /**
     * The amount of ore that needs to be inputted into the machine for it to be
     * worked.
     */
    readonly refineInput: number;

    /**
     * The amount of refined ore that is returned after the machine has been
     * fully worked.
     */
    readonly refineOutput: number;

    /**
     * The number of times this machine needs to be worked to refine ore.
     */
    readonly refineTime: number;

    /**
     * The Tile this Machine is on.
     */
    readonly tile: ITileState;

    /**
     * Tracks how many times this machine has been worked. (0 to refineTime).
     */
    readonly worked: number;

}

/**
 * A player in this game. Every AI controls one player.
 */
export interface IPlayerState extends IGameObjectState, IBasePlayerState {
    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    readonly clientType: string;

    /**
     * Every generator Tile owned by this Player. (listed from the outer edges
     * inward, from top to bottom).
     */
    readonly generatorTiles: ITileState[];

    /**
     * The amount of heat this Player has.
     */
    readonly heat: number;

    /**
     * The time left till a intern spawns. (0 to spawnTime).
     */
    readonly internSpawn: number;

    /**
     * If the player lost the game or not.
     */
    readonly lost: boolean;

    /**
     * The time left till a manager spawns. (0 to spawnTime).
     */
    readonly managerSpawn: number;

    /**
     * The name of the player.
     */
    readonly name: string;

    /**
     * This player's opponent in the game.
     */
    readonly opponent: IPlayerState;

    /**
     * The time left till a physicist spawns. (0 to spawnTime).
     */
    readonly physicistSpawn: number;

    /**
     * The amount of pressure this Player has.
     */
    readonly pressure: number;

    /**
     * The reason why the player lost the game.
     */
    readonly reasonLost: string;

    /**
     * The reason why the player won the game.
     */
    readonly reasonWon: string;

    /**
     * All the tiles this Player's units can spawn on. (listed from the outer
     * edges inward, from top to bottom).
     */
    readonly spawnTiles: ITileState[];

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    readonly timeRemaining: number;

    /**
     * Every Unit owned by this Player.
     */
    readonly units: IUnitState[];

    /**
     * If the player won the game or not.
     */
    readonly won: boolean;

}

/**
 * A Tile in the game that makes up the 2D map grid.
 */
export interface ITileState extends IGameObjectState {
    /**
     * The amount of blueium on this tile.
     */
    readonly blueium: number;

    /**
     * The amount of blueium ore on this tile.
     */
    readonly blueiumOre: number;

    /**
     * (Visualizer only) Different tile types, cracked, slightly dirty, etc.
     * This has no effect on gameplay, but feel free to use it if you want.
     */
    readonly decoration: number;

    /**
     * The direction of a conveyor belt ('blank', 'north', 'east', 'south', or
     * 'west'). blank means conveyor doesn't move.
     */
    readonly direction: string;

    /**
     * Whether or not the tile is a wall.
     */
    readonly isWall: boolean;

    /**
     * The Machine on this Tile if present, otherwise null.
     */
    readonly machine: IMachineState;

    /**
     * The owner of this Tile, or null if owned by no-one. Only for generators
     * and spawn areas.
     */
    readonly owner: IPlayerState;

    /**
     * The amount of redium on this tile.
     */
    readonly redium: number;

    /**
     * The amount of redium ore on this tile.
     */
    readonly rediumOre: number;

    /**
     * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the
     * map.
     */
    readonly tileEast: ITileState;

    /**
     * The Tile to the 'North' of this one (x, y-1). Null if out of bounds of
     * the map.
     */
    readonly tileNorth: ITileState;

    /**
     * The Tile to the 'South' of this one (x, y+1). Null if out of bounds of
     * the map.
     */
    readonly tileSouth: ITileState;

    /**
     * The Tile to the 'West' of this one (x-1, y). Null if out of bounds of the
     * map.
     */
    readonly tileWest: ITileState;

    /**
     * The type of Tile this is ('normal', 'generator', 'conveyor', or 'spawn').
     */
    readonly type: string;

    /**
     * The Unit on this Tile if present, otherwise null.
     */
    readonly unit: IUnitState;

    /**
     * The x (horizontal) position of this Tile.
     */
    readonly x: number;

    /**
     * The y (vertical) position of this Tile.
     */
    readonly y: number;

}

/**
 * A unit in the game. May be a manager, intern, or physicist.
 */
export interface IUnitState extends IGameObjectState {
    /**
     * Whether or not this Unit has performed its action this turn.
     */
    readonly acted: boolean;

    /**
     * The amount of blueium carried by this unit. (0 to job carry capacity -
     * other carried items).
     */
    readonly blueium: number;

    /**
     * The amount of blueium ore carried by this unit. (0 to job carry capacity
     * - other carried items).
     */
    readonly blueiumOre: number;

    /**
     * The remaining health of a unit.
     */
    readonly health: number;

    /**
     * The Job this Unit has.
     */
    readonly job: IJobState;

    /**
     * The number of moves this unit has left this turn.
     */
    readonly moves: number;

    /**
     * The Player that owns and can control this Unit.
     */
    readonly owner: IPlayerState;

    /**
     * The amount of redium carried by this unit. (0 to job carry capacity -
     * other carried items).
     */
    readonly redium: number;

    /**
     * The amount of redium ore carried by this unit. (0 to job carry capacity -
     * other carried items).
     */
    readonly rediumOre: number;

    /**
     * Duration of stun immunity. (0 to timeImmune).
     */
    readonly stunImmune: number;

    /**
     * Duration the unit is stunned. (0 to the game constant stunTime).
     */
    readonly stunTime: number;

    /**
     * The Tile this Unit is on.
     */
    readonly tile: ITileState;

}
