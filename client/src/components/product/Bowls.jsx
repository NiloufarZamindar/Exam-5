import React from 'react';

const Bowls = ({showBowls,children}) => {
    return (
        (showBowls) && (
        <section className="bowl-boxes">
            {children}
        </section>
        )
    );
}

export default Bowls;
