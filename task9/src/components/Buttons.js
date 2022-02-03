function Buttons({ addWater, deleteWater }) {
    return (
        <div className="buttons">
            <button className="btns" onClick={addWater}>increaseWaterLevel</button>
            <button className="btns" onClick={deleteWater}>decreaseWaterLevel</button>
        </div>
    )
}

export default Buttons;
