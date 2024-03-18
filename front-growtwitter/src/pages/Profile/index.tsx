import { SideBar } from "../../components/SideBar";
import WhatsHappening from "../../components/WhatsHappening";
import { PageContainer } from "./styles";


export function Profile() {
  return (
    <PageContainer>
    <SideBar/>
    // perfil aqui
    <WhatsHappening/>
    </PageContainer>
  );
}
