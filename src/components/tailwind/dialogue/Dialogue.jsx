import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button, Loader } from "../../";

const Dialogue = (props) => {
  const {
    isOpen,
    onClose,
    handler,
    title,
    description,
    buttonText,
    buttonLoadingState,
    children,
  } = props;

  return (
    <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-blue bg-opacity-80 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-secondary">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-mintExtreme bg-opacity-20 border border-mintExtreme border-opacity-30 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {children}
            {!children && (
              <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-300 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-700"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-mint"
                    >
                      {title || "Title here..."}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-mint text-opacity-60">
                        {description || "Description here..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-mint bg-opacity-20 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Button
                className="bg-red-800 w-full h-full flex justify-center items-center text-gray-200 border-none hover:bg-red-700 hover:bg-opacity-100 text-[.9rem] font-medium sm:ml-3 sm:w-auto"
                handler={() => {
                  handler();
                }}
              >
                {buttonLoadingState ? <Loader className={"bg-mint"} /> : buttonText || "Done"}
              </Button>
              <Button
                className="border border-white text-white hover:bg-gray-400 text-[.9rem] sm:mt-0 sm:w-auto"
                handler={onClose}
                data-autofocus
              >
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Dialogue;
