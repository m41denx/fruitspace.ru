import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAndroid, faApple, faWindows} from "@fortawesome/free-brands-svg-icons";
import {faFloppyDisk, faLink} from "@fortawesome/free-solid-svg-icons";


export default function GDPSCard(props) {
    return (
        <div className="col-span-2 md:col-span-2 mx-1 my-1.5 md:m-3 p-3 rounded-xl w-auto flex items-center" style={{backgroundColor: "var(--active-color)"}}>
            <img src={props.icon} className="rounded-lg h-20 mr-2" />
            <div className="">
                <h2 className="my-2">{props.name}</h2>
                <p className="m-0 text-gray-400 flex items-center gap-2">{props.id} • {props.plan}</p>
            </div>
        </div>
    )
}

export function DownloadCard(props) {
    return (
        <div className="mx-1 my-1.5 md:m-3 p-3 rounded-xl w-auto md:w-fit" style={{backgroundColor: "var(--active-color)"}}>
            {props.windows && <div className="flex justify-between items-center">
               <span className="flex gap-2">
                   <FontAwesomeIcon icon={faWindows} /><span className="hidden md:inline">Windows</span>
               </span>
                <span className="flex rounded-lg ml-2" style={{backgroundColor: "var(--primary-color)"}}>
                    <FontAwesomeIcon icon={faFloppyDisk} className="rounded-l-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                        onClick={()=>window.location.href=props.windows}/>
                    <FontAwesomeIcon icon={faLink} className="rounded-r-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                                     onClick={()=>{navigator.clipboard.writeText(encodeURI(props.windows));props.copyR()}}/>
                </span>
            </div>
            }
            {props.android && <div className="flex justify-between items-center">
                <span className="flex gap-2">
                    <FontAwesomeIcon icon={faAndroid} /><span className="hidden md:inline">Android</span>
                </span>
                <span className="flex rounded-lg ml-2 my-1 w-auto" style={{backgroundColor: "var(--primary-color)"}}>
                    <FontAwesomeIcon icon={faFloppyDisk} className="rounded-l-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                                     onClick={()=>window.location.href=props.android}/>
                    <FontAwesomeIcon icon={faLink} className="rounded-r-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                                     onClick={()=>{navigator.clipboard.writeText(encodeURI(props.android));props.copyR()}}/>
                </span>
            </div>
            }
            {props.ios && <div className="flex justify-between items-center">
                <span className="flex gap-2">
                    <FontAwesomeIcon icon={faApple} /><span className="hidden md:inline">iOS</span>
                </span>
                <span className="flex rounded-lg ml-2" style={{backgroundColor: "var(--primary-color)"}}>
                    <FontAwesomeIcon icon={faFloppyDisk} className="rounded-l-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                                     onClick={()=>window.location.href=props.ios}/>
                    <FontAwesomeIcon icon={faLink} className="rounded-r-lg p-2 hover:bg-blue-800 cursor-pointer aspect-square"
                                     onClick={()=>{navigator.clipboard.writeText(encodeURI(props.ios));props.copyR()}}/>
                </span>
            </div>
            }

        </div>
    )
}