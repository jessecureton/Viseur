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
     * The player whose turn it is currently. That player can send commands.
     * Other players cannot.
     */
    readonly currentPlayer: IPlayerState;

    /**
     * The current turn number, starting at 0 for the first player's turn.
     */
    readonly currentTurn: number;

    /**
     * Determins the rate at which the highest value victory points degrade.
     */
    readonly degradeRate: number;

    /**
     * A mapping of every game object's ID to the actual game object. Primarily
     * used by the server and client to easily refer to the game objects via ID.
     */
    readonly gameObjects: {[id: string]: IGameObjectState};

    /**
     * How many interns a player can have.
     */
    readonly internCap: number;

    /**
     * Every job in the game.
     */
    readonly jobs: IJobState[];

    /**
     * Every Machine in the game.
     */
    readonly machines: IMachineState[];

    /**
     * How many managers a player can have.
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
     * The maximum number of turns before the game will automatically end.
     */
    readonly maxTurns: number;

    /**
     * How many physicists a player can have.
     */
    readonly physicistCap: number;

    /**
     * List of all the players in the game.
     */
    readonly players: IPlayerState[];

    /**
     * How much each refined ore adds when put in the generator.
     */
    readonly refinedValue: number;

    /**
     * A unique identifier for the game instance that is being played.
     */
    readonly session: string;

    /**
     * The number of turns between spawning unit waves.
     */
    readonly spawnTime: number;

    /**
     * How many turns a unit is stunned.
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
     * How many turns a unit is immune to being stunned.
     */
    readonly timeImmune: number;

    /**
     * Every Unit in the game.
     */
    readonly units: IUnitState[];

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
 * Information about a units's job.
 */
export interface IJobState extends IGameObjectState {
    /**
     * How many combined resources a beaver with this Job can hold at once.
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
     * The Job title.
     */
    readonly title: string;

}

/**
 * A machine on a tile.
 */
export interface IMachineState extends IGameObjectState {
    /**
     * What type of ore the machine takes it, also determins the type of
     * material it outputs.
     */
    readonly oreType: string;

    /**
     * The amount of ore that needs to be inputted into the machine.
     */
    readonly refineInput: number;

    /**
     * The amount of material that out of the machine after running.
     */
    readonly refineOutput: number;

    /**
     * The amount of turns this machine takes to refine the ore.
     */
    readonly refineTime: number;

    /**
     * The Tile this Machine is on.
     */
    readonly tile: ITileState;

    /**
     * Time till the machine finishes running.
     */
    readonly timeLeft: number;

    /**
     * Tracks how many times this machine has been worked.
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
     * The amount of heat this Player has.
     */
    readonly heat: number;

    /**
     * Time left till a intern spawns.
     */
    readonly internSpawn: number;

    /**
     * If the player lost the game or not.
     */
    readonly lost: boolean;

    /**
     * Time left till a manager spawns.
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
     * Time left till a physicist spawns.
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
     * (Visualizer only) Different tile tipes, cracked, slightly dirty, ect.
     * This has no effect on gameplay, but feel free to use it if you want.
     */
    readonly decoration: number;

    /**
     * The direction of a conveyor belt ('blank', 'north', 'east', 'south', or
     * 'west'). blank mean no conveyor.
     */
    readonly direction: string;

    /**
     * Weither or not the tile is a wall.
     */
    readonly isWall: boolean;

    /**
     * The machine on this Tile if present, otherwise null.
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
     * Whether this Unit has performed its action this turn.
     */
    readonly acted: boolean;

    /**
     * The amount of blueium carried by this unit.
     */
    readonly blueium: number;

    /**
     * The amount of blueium ore carried by this unit.
     */
    readonly blueiumOre: number;

    /**
     * The remaining health of a unit.
     */
    readonly health: number;

    /**
     * The Job this Unit does.
     */
    readonly job: IJobState;

    /**
     * How many more times this Unit may move this turn.
     */
    readonly moves: number;

    /**
     * The Player that owns and can control this Unit.
     */
    readonly owner: IPlayerState;

    /**
     * The amount of redium carried by this unit.
     */
    readonly redium: number;

    /**
     * The amount of redium ore carried by this unit.
     */
    readonly rediumOre: number;

    /**
     * Duration of stun immunity.
     */
    readonly stunImmune: number;

    /**
     * Duration the unit is stunned.
     */
    readonly stunTime: number;

    /**
     * The Tile this Unit is on.
     */
    readonly tile: ITileState;

}