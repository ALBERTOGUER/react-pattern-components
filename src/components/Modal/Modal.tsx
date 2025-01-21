import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCheckCircle, faWarning } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';

type typeModal = 'error' | 'success' | 'message' | 'form' | 'warning' | 'confirm' | undefined;

export interface ModalProps extends FC {
    /** Is this the principal call to action on the page? */
    isOpen: boolean;

    type: typeModal;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label?: string;

    children?: React.ReactNode;

    icon?: JSX.Element;

    classProp?: string;

    tittle: string;

    onClose: () => void;
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Modal = ({
    type = undefined,
    isOpen,
    backgroundColor,
    children,
    classProp,
    tittle,
    onClose,
    icon
}: ModalProps) => {

    const iconSelect = () => {
        return (
            <div className='mt-3 flex justify-center'>
                {type == 'error' ? <FontAwesomeIcon icon={faCircleXmark} color='red' size='4x' /> : type == 'success' ? <FontAwesomeIcon icon={faCheckCircle} color='green' size='4x' /> : type == 'warning' ? <FontAwesomeIcon icon={faWarning} color='yellow' size='4x' /> : type == undefined ? null : icon}
            </div>
        )
    }

    return (
        <>
            {isOpen && createPortal(
                <div id="default-modal" tabIndex={-1} aria-hidden="true" className={classProp + ` fixed flex bg-transparent top-0 right-0 left-0 z-50 justify-center items-center w-screen h-full`}>
                    <div style={{ backgroundColor }} className="p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex flex-row items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {type == "error" ? 'Error' : type == "success" ? 'Success' : type == "confirm" ? "Confirm" : tittle}
                            </h3>

                            <button onClick={onClose} type="button" className=" p-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        {
                            iconSelect()
                        }
                        {children}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
