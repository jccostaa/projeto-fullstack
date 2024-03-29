import { SideBar } from "../../components/SideBar";
import { Timeline } from "../../components/Timeline";
import WhatsHappening from "../../components/WhatsHappening";
import { PageContainer } from "./styles";

export function Home(){
    return (
        <PageContainer>
        <SideBar/>
        <Timeline/>
        <WhatsHappening/>
        </PageContainer>
    )
}