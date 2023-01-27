import data from "./ListData.json"

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className="record">
            {filteredData.map((item) => (
                <li className="scroll-container" key={item.id}>
                    {item.text}
                    <p className="record-info" key={item.id}>{item.age} anos</p>
                    <p className="record-info" key={item.id}>Objetivo: {item.goal}</p>
                </li>
            ))}
        </ul>
    )
}

export default List