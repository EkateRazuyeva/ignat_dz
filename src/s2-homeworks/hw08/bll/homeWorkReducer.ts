import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return [...state].sort((x, y) => x.name.localeCompare(y.name))
            } else {
                return [...state].sort((x, y) => y.name.localeCompare(x.name))
            }// need to fix
        }
        case 'check': {
            return state.filter(s => s.age >= action.payload)
        }
        default:
            return state
    }
}
