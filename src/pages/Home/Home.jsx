import { Card } from "antd"
import AppNavbar from "../../Components/AppNavbar/AppNavbar"
import InputForm from "../InputForm/InputForm"
import AppCard from "../../Components/AppCard/AppCard"
import AppCalender from "../../Components/AppCalender/AppCalender"
import AppToolCards from "../../Components/AppToolCards/AppToolCards"

const Home = () => {
    const services = [{
        'title': 'TC builder',
        'subtitle': 'Exercitation commodo dolore aute dolor dolor duis labore duis.',
        'icon': 'paper.png',
        'route': '/tcform',
        'verified': true
    },
    {
        'title': 'Bonafied',
        'subtitle': 'Quis ad laborum mollit cupidatat voluptate nostrud excepteur commodo sint.',
        'icon': 'proof1.png',
        'route': '/bonafiedform',
        'verified': true
    },
    {
        'title': 'Certificate',
        'subtitle': 'Sit consectetur labore duis aliqua magna.',
        'icon': 'certificate.png',
        'route': '#'

    }]

    const googleServices = [{
        'title': 'Sheets',
        'subtitle': 'Exercitation commodo dolore aute dolor dolor duis labore duis.',
        'icon': 'googlesheets.png',
        'route': 'https://sheets.google.com/',
        'verified': true
    },
    {
        'title': 'docs',
        'subtitle': 'Quis ad laborum mollit cupidatat voluptate nostrud excepteur commodo sint.',
        'icon': 'icons8-google-docs-96.png',
        'route': 'https://docs.google.com/',
        'verified': true
    },
    {
        'title': 'Gmail',
        'subtitle': 'Sit consectetur labore duis aliqua magna.',
        'icon': 'icons8-gmail-48.png',
        'route': 'https://mail.google.com/',
        'verified': true
    },
    {
        'title': 'Meet',
        'subtitle': 'Sit consectetur labore duis aliqua magna.',
        'icon': 'icons8-google-meet-48.png',
        'route': 'https://meet.google.com/',
        'verified': true

    },
    {
        'title': 'Forms',
        'subtitle': 'Sit consectetur labore duis aliqua magna.',
        'icon': 'icons8-google-forms-48.png',
        'route': 'https://forms.google.com/',
        'verified': true

    },
    {
        'title': 'Slides',
        'subtitle': 'Sit consectetur labore duis aliqua magna.',
        'icon': 'icons8-google-slides-48.png',
        'route': 'https://slides.google.com/',
        'verified': true

    }]

    return (
        <>
            <AppNavbar />
            <div className="flex p-20">

                <div className="mt-20 h-80" >
                    <AppCalender />
                </div>

                <div className="ml-10 flex align-items-center flex-col" >
                    <div>
                        <p className="text-[24px] font-medium mb-1">GVM services</p>
                        <p>Tools to simplify tasks and automate processes</p>
                        <div className="flex mt-4 gap-3 flex-wrap " >

                            {services?.map((e) => {
                                return (
                                    <AppCard key={e.title} title={e.title} subtitle={e.subtitle} icon={e.icon} route={e.route} verified={e.verified} />
                                )
                            })}

                        </div>
                        <div>
                            <p className="text-[20px] mt-6 font-medium mb-1">Google Workspace</p>
                            <p className="text-sm">Tools to simplify tasks and automate processes</p>
                            <div className="flex mt-4 gap-3 flex-wrap " >

                                {googleServices?.map((e) => {
                                    return (
                                        <AppToolCards key={e.title} title={e.title} subtitle={e.subtitle} icon={e.icon} route={e.route} verified={e.verified} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home