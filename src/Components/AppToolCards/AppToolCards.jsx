import { Link } from "react-router-dom"


const AppToolCards = ({ title, subtitle, icon, route, verified }) => {
    return (
        <Link to={route} target="_blank" className="no-underline hover:bg-slate-100" style={{ color: 'black' }}>
            <div className="border-1 pt-3 pl-3 pr-3 h-20 w-80 rounded-md flex flex-col  justify-center" style={{ border: '1px solid #CDD7E0' }}>
                <div className="flex gap-3">
                    <div className="h-10 w-10"  >
                        <img src={icon} className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <div className="flex align-items-center  gap-2">
                            <p className="font-medium mb-1">{title}</p>
                            {verified ? <img className="h-4 w-4" src="verified.png" /> : null}

                        </div>
                        <p className="text-[12px] text-gray-500 font-normal ">{subtitle}</p>
                    </div>

                </div>


            </div>
        </Link>
    )
}

export default AppToolCards