
import toast, { Toaster } from 'react-hot-toast';
type PositionType = 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' |'top-left'
 interface ToastProps {
    position:PositionType
 }

const Toast = ({position}:ToastProps) => {    
    const notify = () => toast('Here is your toast.',{
        position
    });
    return (<>
        <button onClick={notify}>Make me a toast</button>
        <Toaster/>
    </>);
}

export default Toast;