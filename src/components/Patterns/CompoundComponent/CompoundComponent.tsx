import React from 'react';

export interface CompoundProps {
    children: React.ReactNode;
}
export interface CompoundItemProps {
    children: React.ReactNode;
    classes: string,
}

export const CompoundComponent = ({
    children,
    ...props
}: CompoundProps) => {
    return (
        <div {...props} className='flex'>
            {children}
        </div>
    );
};


export const CompoundComponentItem = ({
    children,
    classes,
    ...props
}: CompoundItemProps) => {
    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
};