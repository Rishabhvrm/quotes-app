import React from "react";

const headerStyle = {
    backgroundColor: '#333333', /* Charcoal */
    color: '#F5F5F5', /* White Smoke */
    padding: '1%'
}
export function Footer() {
    return (
        <footer align="center" style={headerStyle}>
            <p padding="10%">© 2024 Quote App. All rights reserved.</p>
        </footer>
    );
}