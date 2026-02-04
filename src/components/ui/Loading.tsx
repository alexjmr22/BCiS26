import React, { useEffect, useState } from 'react';
import { MdInfoOutline, MdClose } from 'react-icons/md';

/**
 * Global trigger to show the "More Info Soon" modal from anywhere in the app.
 * Usage: import { showSoonModal } from './components/ui/Loading';
 *        <button onClick={showSoonModal}>Click me</button>
 */
export const showSoonModal = () => {
    window.dispatchEvent(new CustomEvent('show-soon-modal'));
};

const Loading: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('show-soon-modal', handleOpen);
        return () => window.removeEventListener('show-soon-modal', handleOpen);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const onClose = () => setIsOpen(false);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop with extreme blur and dark tint */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative overflow-hidden bg-[#0c061a]/98 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 max-w-[90%] md:max-w-lg w-full shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/30 hover:text-white cursor-pointer z-10"
                >
                    <MdClose size={24} />
                </button>

                <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 relative z-10">
                    {/* Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-purple/20 blur-2xl rounded-full" />
                        <div className="relative bg-brand-purple/10 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-brand-purple/20">
                            <MdInfoOutline className="text-5xl md:text-6xl text-brand-purple" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3
                            id="modal-title"
                            className="text-xl md:text-3xl font-black font-orbitron text-white leading-tight uppercase"
                        >
                            More Information <br className="md:hidden" />
                            <span className="text-brand-purple">Coming Soon</span>
                        </h3>

                        <p className="text-white/70 text-base md:text-lg font-light leading-relaxed font-oxanium">
                            We're preparing every detail for the best edition of BCiS yet. Stay tuned for updates!
                        </p>
                    </div>

                    {/* Premium decoration line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent rounded-full opacity-50" />

                    <button
                        onClick={onClose}
                        className="w-full py-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold font-orbitron rounded-2xl shadow-lg shadow-brand-purple/20 cursor-pointer"
                    >
                        GOT IT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Loading;
