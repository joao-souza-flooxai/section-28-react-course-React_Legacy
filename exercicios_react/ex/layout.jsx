import React from "react";

export default function Layout(props){
    return(
         <div>
            {React.Children.map(props.children, child => (
                <div>
                    {child}
                    <hr />
                </div>
            ))}
        </div>
    );
};