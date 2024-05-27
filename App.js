import React from "react";
import ReactDOM from "react-dom/client";

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

const reactElement = <h1>Hello React Element</h1>
const TitleComponent = () => {
    return <h1 className='head' tabIndex='5'>
    Namaste React using jsx
</h1>

}
    

const HeadingComponent = () => (
    <div className='heading'>
        {TitleComponent()}
       <h1>Namaste React Functional Component</h1> 
    </div>
)
root.render(<HeadingComponent />)
// root.render(reactElement)


