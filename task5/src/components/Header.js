//header elements
function Header({ addTask, sortTask }) {
    return (
        <header>
            <div className="header-container">
                <button
                    className="btns"
                    onClick={(e) => {
                        e.preventDefault();
                        addTask(Math.floor(Math.random() * 100))
                    }}
                >
                    add card
                </button>
                <button
                    className="btns"
                    onClick={(e) => {
                        e.preventDefault();
                        sortTask()
                    }}
                >
                    sort cards
                </button>
            </div>
        </header>
    )
}

export default Header;