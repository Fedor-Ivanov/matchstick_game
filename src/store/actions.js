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