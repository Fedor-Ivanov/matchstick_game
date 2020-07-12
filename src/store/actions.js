export const ACTION_START_GAME = 'ACTION_START_GAME';
export function startGame(itemsNumber) {
    return {
        type: ACTION_START_GAME,
        payload: itemsNumber
    };
}

export const ACTION_SET_GAME_MODE = 'ACTION_SET_GAME_MODE';
export function setGameMode(mode) {
    return {
        type: ACTION_SET_GAME_MODE,
        payload: mode
    };
}

export const ACTION_TOGGLE_MODAL = 'ACTION_TOGGLE_MODAL';
export function toggleModal() {
    return {
        type: ACTION_TOGGLE_MODAL,
    };
}

export const ACTION_TAKE_ITEMS = 'ACTION_TAKE_ITEMS';
export function takeItems(itemsNumber) {
    return {
        type: ACTION_TAKE_ITEMS,
        payload: itemsNumber
    };
}

export const ACTION_PULL_ITEM = 'ACTION_PULL_ITEM';
export function pullItems(itemsNumber) {
    return {
        type: ACTION_PULL_ITEM,
        payload: itemsNumber
    };
}

export const ACTION_PULL_ITEM_COMP = 'ACTION_PULL_ITEM_COMP';
export function pullItemsComp(itemsNumber) {
    return {
        type: ACTION_PULL_ITEM_COMP,
        payload: itemsNumber
    };
}

export const ACTION_SWITCH_TURN = 'ACTION_SWITCH_TURN';
export function switchTurn() {
    return {
        type: ACTION_SWITCH_TURN,
    };
}

export const ACTION_SET_WINNER = 'ACTION_SET_WINNER';
export function haveWinner() {
    return {
        type: ACTION_SET_WINNER,
    };
}


export const ACTION_SET_PULL = 'ACTION_SET_PULL';
export function setPullValue(value) {
    return {
        type: ACTION_SET_PULL,
        payload: value
    };
}

export const ACTION_SET_TAKE = 'ACTION_SET_TAKE';
export function setTakeValue(value) {
    return {
        type: ACTION_SET_TAKE,
        payload: value
    };
}