import {styled} from 'styled-components'

function NewEventButton (){
    return (
        <Button>
            +
        </Button>
    )
}

const Button = styled.button`
    background-color: var(--dimmed-bg-color);
    font-size: 3em;
    font-weight: bolder;
    text-align: center;
    width: 100%;
    border-radius: 20px;
    padding-block: 20px;

    cursor: pointer;
    transition: 500ms;

    &:hover {
        background-color: var(--layout-color);
        color: var(--dimmed-bg-color);
    }
`


export default NewEventButton