const container = document.querySelector(`#root`)

const numGenerator = () => {
    
    return Math.floor(Math.random()*3)
}

const colorGenerator = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const Squares = () => {
    const squareStyle = [{
        id: `small`,
        height: `50px`,
        width: `50px`,
        backgroundColor: colorGenerator(),
        display: `inline-block`,
        margin: `10px`
    },
    {
        id: `medium`,
        height: `100px`,
        width: `100px`,
        backgroundColor: colorGenerator(),
        display: `inline-block`,
        margin: `10px`
    },
    {
        id: `large`,
        height: `150px`,
        width: `150px`,
        backgroundColor: colorGenerator(),
        display: `inline-block`,
        margin: `10px`
    },
]


    return (
        <>
            <div style = {squareStyle[numGenerator()]}></div>
            <div style = {squareStyle[numGenerator()]}></div>
            <div style = {squareStyle[numGenerator()]}></div>
        </>
    )

}

const Circles = () => {
    const circleStyle = [{
        id: `small`,
        height: `50px`,
        width: `50px`,
        backgroundColor: colorGenerator(),
        borderRadius: `50%`,
        display: `inline-block`,
        margin: `10px`
    },
    {
        id: `medium`,
        height: `100px`,
        width: `100px`,
        backgroundColor: colorGenerator(),
        borderRadius: `50%`,
        display: `inline-block`,
        margin: `10px`
    },{
        id: `large`,
        height: `150px`,
        width: `150px`,
        backgroundColor: colorGenerator(),
        borderRadius: `50%`,
        display: `inline-block`,
        margin: `10px`
    },
]

    return (
        <>
            <Squares />
            <div style = {circleStyle[numGenerator()]}></div>
            <div style = {circleStyle[numGenerator()]}></div>
            <div style = {circleStyle[numGenerator()]}></div>
            <br></br>
            <button>Refresh Me</button>
        </>
    )
}


const root = ReactDOM.createRoot(container)
root.render(<Circles />)

