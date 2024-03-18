import { SidebarBody, SidebarItem, SidebarSections, SidebarStyled } from "./styles";
import logo from "./../../assets/logo_growtweet.svg"
import homeIconSelected from "./../../assets/icone_pagina inicial_selecionado.svg"
import exploreIcon from "./../../assets/icone_explorar.svg"
import profileIcon from "./../../assets/icone_perfil.svg"
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export function SideBar() {
    const navigate = useNavigate()

    return (
        <SidebarBody>
            <SidebarStyled>
                <SidebarSections>
                    <img src={logo} id="logo" alt="logo growtwitter" />

                    <SidebarItem
                        onClick={() => navigate("/")}
                        className={location.pathname === "/" ? "selected" : ""}>
                        <img src={homeIconSelected} alt="homeIcon" />
                        <p>Página Inicial</p>
                    </SidebarItem>

                    <SidebarItem
                        onClick={() => navigate("/explore")}
                        className={location.pathname === "/explore" ? "selected" : ""}
                    >
                        <img src={exploreIcon} alt="exploreIcon" />
                        <p>Explorar</p>
                    </SidebarItem>

                    <SidebarItem
                        onClick={() => navigate("/profile")}
                        className={location.pathname === "/profile" ? "selected" : ""}
                    >
                        <img src={profileIcon} alt="profileIcon" />
                        <p>Perfil</p>
                    </SidebarItem>
                    <SidebarItem>
                        <Button type="button"  />
                    </SidebarItem>
                </SidebarSections>
            </SidebarStyled>
        </SidebarBody>
    )
}