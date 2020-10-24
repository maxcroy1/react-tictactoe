import Square from './Square';

const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat (3, 1fr)",
};

export default function Board() {
    return (
        <div>
            <Square value="1" onClick={() => onClick("dummyValue")} />
            <Square value="2" onClick={() => onClick("dummyValue")} />
            <Square value="3" onClick={() => onClick("dummyValue")} />
            <Square value="4" onClick={() => onClick("dummyValue")} />
            <Square value="5" onClick={() => onClick("dummyValue")} />
            <Square value="6" onClick={() => onClick("dummyValue")} />
            <Square value="7" onClick={() => onClick("dummyValue")} />
            <Square value="8" onClick={() => onClick("dummyValue")} />
            <Square value="9" onClick={() => onClick("dummyValue")} />
        </div>
    );
}