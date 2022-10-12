import './CategoryButton.css'
function CategoryButton (props)  {
    return (
        <div>
        <lu className="btn"> <a className="btn" href='#https://www.google.com/?hl=es'> {props.name}</a></lu>
        </div>
    );
}

export default CategoryButton;