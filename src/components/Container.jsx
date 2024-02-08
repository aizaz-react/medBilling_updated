import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`md:container md:mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container
