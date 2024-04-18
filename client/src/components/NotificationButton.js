export default function NotificationButton({message, children})
{
    function handleClick(){
        alert(message);
    }

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
};