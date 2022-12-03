import PrimaryButton from "../buttons/PrimaryButton";

export default function FormAction({
    handleSubmit,
    type = 'Button',
    action = 'submit',
    text
}) {
    return (
        <>
            {
                type === 'Button' ?
                    <PrimaryButton
                        type={action}
                        className="flex items-center"
                        onSubmit={handleSubmit}
                    >

                        {text}
                    </PrimaryButton>
                    :
                    <></>
            }
        </>
    )
}