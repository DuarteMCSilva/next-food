'use client';
import {useFormStatus} from 'react-dom';

export default function FormSubmitButton( { defaultText, pendingText }) {

    const { pending } = useFormStatus();


    return (
        <button disabled={pending}>
            {pending ? pendingText : defaultText}
        </button>
    );
}
