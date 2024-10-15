import { ModalsWithForm } from "../ModalsWithForm/ModalsWithForm";
import { CustomerForm } from "./CustomerForm";
import { WriteUsBtn } from "./WriteUsBtn";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    return (
        <ModalsWithForm
            formComponent={CustomerForm}
            triggerComponent={WriteUsBtn}
            className={className}
        />
    );
};
