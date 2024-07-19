import React from 'react'
import downArrow from './downArrow.png'
import upArrow from './upArrow.png'
import arrows from './unfold.png'


const downIcon: string = downArrow
const upIcon = upArrow
const noneIcon = arrows

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                alt={'arrow'}
                id={id + '-icon-' + sort}
                src={icon}
                height={'10px'}
                width={'10px'}
                style={{marginLeft:'5px'}}
            />


        </span>
    )
}

export default SuperSort
