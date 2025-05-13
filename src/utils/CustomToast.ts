import toast from "react-hot-toast";

type PositionType =
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left";
type AriaPropRole = "alert" | "status";
type AriaLive = "assertive" | "off" | "polite";
type IconTheme = {
  primary: string;
  secondary: string;
};
type ToastType ='success' | 'error' | 'info' | 'warning';

interface AriaProps {
  role: AriaPropRole;
  [`aria-live`]: AriaLive;
}


interface ToastConfigurationObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any;
  iconTheme: IconTheme;
  ariaProps: AriaProps;
  duration:number
}

interface customToastProps {
  messages: string[];
  position?: PositionType;
  type:ToastType
}

const errorToastConfiguration: ToastConfigurationObject = {
  style: {
    background: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
    borderRadius: "8px",
  },
  iconTheme: {
    primary: "#721c24",
    secondary: "#f8d7da",
  },
  ariaProps: {
    role: "alert",
    "aria-live": "assertive",
  },
  duration:2000
};

export function CustomToast({ type,messages, position }: customToastProps) {
  messages.forEach((message:string,index:number)=>{
    
    if(type === 'error'){
        setTimeout(()=>{
            toast.error(message, {
                ...errorToastConfiguration,
                position,
              });
        },500*index)
      
    }
  })
   

}
