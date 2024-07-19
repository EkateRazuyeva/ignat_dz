const initState = {
    themeId: 1,
}

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export type ActionType = changeThemeIdType

export const themeReducer = (state = initState, action: ActionType): { themeId:number} => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any

