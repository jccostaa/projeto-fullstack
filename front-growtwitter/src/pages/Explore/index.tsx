import { SideBar } from "../../components/SideBar";
import { TimelineExplore } from "../../components/TimelineExplore";
import WhatsHappening from "../../components/WhatsHappening";
import { PageContainer } from "../Home/styles";

export function Explore(){
    return(
        <PageContainer>
        <SideBar/>
        <TimelineExplore/>
        <WhatsHappening/>
        </PageContainer>
    )
}