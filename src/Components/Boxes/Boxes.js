import './boxes.css'

function Boxes(props) {
        return (
            <div className="boxes">
            {props.data.map((data1,index)=>(
                <div className="box">
                    <h3>{data1.name}</h3>
                    <p>{data1.desc}
                    </p>
                </div>
            ))}
            </div>
        )
}
export default Boxes;