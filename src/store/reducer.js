import {
    ACTION_TAKE_ITEMS,
    ACTION_PULL_ITEM,
    ACTION_SWITCH_TURN,
    ACTION_PULL_ITEM_COMP,
    ACTION_CHECK_PULL
} from './actions';

const initialState = {
    itemsPull: 25,
    playerCount: 0,
    computerCount: 0,
    playerTurn: true,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_TAKE_ITEMS:

            return {
                ...state,
                itemsPull: state.itemsPull - payload
            }

        case ACTION_PULL_ITEM:

            return {
                ...state,
                playerCount: state.playerCount + payload
            }

        case ACTION_SWITCH_TURN:

            return {
                ...state,
                playerTurn: !state.playerTurn
            }

        case ACTION_PULL_ITEM_COMP:
            return {
                ...state,
                computerCount: state.computerCount + payload
            }

        default:
            return state;
    }
}