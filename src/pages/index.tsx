'use client';
import { NavbarTop } from "@/components/NavBar";
import PersonalCard from "@/components/PersonalCard";
import { useTheme } from "@/contexts/ThemeContext";
import AboutMe from "@/components/AboutMe";
import ExperienceTabs from "@/components/ExperienceTab";
import Game from "@/components/game/Game";
import ProjectPanel from "@/components/project/ProjectPanel";

export default function Home() {
  const isDarkMode: boolean = useTheme().theme === "dark";
  const backgroundColor: string = isDarkMode ? "bg-dark-mode-background" : "bg-light-mode-background";

  return (
    <div className={`justify-center items-center ${backgroundColor} min-h-screen max-w-full`}>
      <NavbarTop />
      <div className="flex flex-row justify-center items-start sm:my-6 gap-y-4 sm:gap-x-10">
        <div className="mx-2 pl-2 md:pl-10 sticky top-20">
          <PersonalCard />
        </div>
        <div className="flex flex-col gap-4 md:gap-[3.5rem] max-w-4xl ">
          <AboutMe />
          <ExperienceTabs />
          <ProjectPanel />
          <Game />
        </div>
      </div>
    </div>
  );
}


