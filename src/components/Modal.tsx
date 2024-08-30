import React, { useEffect, useRef } from "react";
import Close from "../assets/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Keeping the focus inside the modal "Focus Trap"
      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        )
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey) {
            // Shift + Tab (Backward)
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab (Forward)
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }

        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Set focus to the first focusable element when the modal opens
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose, children]);

  if (!isOpen) return null;

  return (
    <div className=" w-full fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="min-w-[300px] max-w-[80%] bg-white rounded-lg shadow-lg "
      >
        <div className="flex justify-end p-4">
          <img
            src={Close}
            alt="close icon"
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
