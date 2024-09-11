export interface FormInModalProps {
    notificationHandler: (submitFn: SubmitFnType) => Promise<void>;
}

export type SubmitFnType = () => Promise<void>;
