function Buttons({ addWater, deleteWater }) {
    return (
        <div className="buttons">
            <button className="btns" onClick={() => { addWater() }}>add water</button>
            <button className="btns" onClick={() => { deleteWater() }}>delete water</button>
        </div>
    )
}

export default Buttons;
