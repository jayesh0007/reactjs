import React from "react";

function Header ({greet,bye}) {
    return (
        <h1>Hello, {greet}{bye}</h1>
    );
}
export default Header;

// see how we pass here props ie greet in {} in fucntion paramter and h1 tag as well