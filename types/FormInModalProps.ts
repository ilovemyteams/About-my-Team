export interface FormInModalProps {
    notificationHandler: (submitFn: SubmitFnType) => Promise<void>;
}

export type SubmitFnType = () => Promise<void>;

export interface TriggerComponentProps {
    modalOpenHandler: () => void;
    isModalOpen: boolean;
}
