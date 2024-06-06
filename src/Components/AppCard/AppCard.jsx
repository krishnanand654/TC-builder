import { Link } from "react-router-dom"
import { Chip } from "@nextui-org/react";

const AppCard = ({ title, subtitle, icon, route, verified }) => {
    return (
        <Link to={route} className="no-underline hover:bg-slate-100" style={{ color: 'black' }}>
            <div className="border-1 pt-3 pl-3 pr-3 h-40 w-80 rounded-md flex flex-col align-items-center justify-center" style={{ border: '1px solid #CDD7E0' }}>
                <div className="p-1 rounded-md border border-gray-400 mb-2 ">
                    <img src={icon} className="h-9" />
                </div>
                <div className="flex align-items-center gap-2">
                    <p className="font-medium mb-1">{title}</p>
                    {verified ? <img className="h-4 w-4" src="verified.png" /> : <Chip size='sm' className="text-[10px] font-medium h-5" color="default" variant="bordered">Under Development</Chip>}
                </div>
                <p className="text-[12px] text-gray-500 font-normal text-center">{subtitle}</p>

            </div>
        </Link>
    )
}

export default AppCard