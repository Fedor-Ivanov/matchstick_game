import {
    ACTION_TAKE_ITEMS,
    ACTION_PULL_ITEM,
    ACTION_SWITCH_TURN,
    ACTION_PULL_ITEM_COMP,
    ACTION_SET_WINNER,
    ACTION_SET_GAME_MODE,
    ACTION_TOGGLE_MODAL,
    ACTION_SET_PULL,
    ACTION_SET_TAKE
} from './actions';

const initialState = {
    itemsPull: 25,
    taking: 3,
    playerCount: 0,
    computerCount: 0,
    playerTurn: 'null',
    haveWinner: false,
    modalIsVisible: true
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

        case ACTION_SET_WINNER:

            return {
                ...state,
                haveWinner: !state.haveWinner
            }

        case ACTION_SET_GAME_MODE:

            return {
                ...state,
                playerTurn: +payload
            }

        case ACTION_TOGGLE_MODAL:

            return {
                ...state,
                modalIsVisible: !state.modalIsVisible
            }

        case ACTION_SET_PULL:

            return {
                ...state,
                itemsPull: payload * 2 + 1
            }

        case ACTION_SET_TAKE:

            return {
                ...state,
                taking: payload
            }

        default:
            return state;
    }
}