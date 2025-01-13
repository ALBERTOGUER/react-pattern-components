import { createPortal } from 'react-dom';
import React, { FC } from 'react';

export interface ModalProps extends FC {
    /** Is this the principal call to action on the page? */
    isHidden: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label?: string;

    children: React.ReactNode;

    classProp?: string;
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Modal = ({
    isHidden,
    size = 'medium',
    backgroundColor,
    label,
    children,
    classProp,
    ...props
}: ModalProps) => {
    return (
        <>
            {isHidden && createPortal(
                <div id="default-modal" tabIndex={-1} aria-hidden="true" className={classProp + `hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div style={{ backgroundColor }} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
