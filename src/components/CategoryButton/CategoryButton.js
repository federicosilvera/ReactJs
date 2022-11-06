import './CategoryButton.css'
function CategoryButton (props)  {
    return (
        <div>
        <ul className="btn"> {props.name}</ul>
        </div>
    );
}

export default CategoryButton;