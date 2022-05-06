import { PieChartIcon } from "../../../components/icons/PieChart";
import { ProjectsIcon } from "../../../components/icons/Projects";
import { NewsIcon } from "../../../components/icons/News";
import { CalendarIcon } from "../../../components/icons/Calendar";
import { CartIcon } from "../../../components/icons/Cart";
import { ArchiveIcon } from "../../../components/icons/Archive";
import { LoveIcon } from "../../../components/icons/Love";
import { PeopleIcon } from "../../../components/icons/People";
import { ResearchIcon } from "../../../components/icons/Research";
import { NewspaperIcon } from "../../../components/icons/Newspaper";
import { SchoolIcon } from "../../../components/icons/School";
import { ImageIcon } from "../../../components/icons/Image";
import { DocumentIcon } from "../../../components/icons/Document";
import { SidebarLink } from "./SidebarLink";

export const Sidebar: React.FC = () => (
  <aside
    id="sidebar"
    className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
    aria-label="Sidebar"
  >
    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white divide-y space-y-1">
          <ul className="space-y-2 pb-2">
            <li>
              <SidebarLink
                href="/admin/"
                label="Dashboard"
                icon={<PieChartIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/projects/"
                label="Projects"
                icon={<ProjectsIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/news/"
                label="News"
                icon={<NewsIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/events/"
                label="Events"
                icon={<CalendarIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/products/"
                label="Shop"
                icon={<CartIcon />}
              />
            </li>
          </ul>

          <ul className="py-2">
            <li>
              <SidebarLink
                href="/admin/teaching-resources/"
                label="Teacher Resources"
                icon={<ArchiveIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/publications/"
                label="Press & Publications"
                icon={<NewspaperIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/researches/"
                label="Research"
                icon={<ResearchIcon />}
              />
            </li>
          </ul>

          <ul className="py-2">
            <li>
              <SidebarLink
                href="/admin/trustees/"
                label="Trustees"
                icon={<PeopleIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/partners/"
                label="Partners"
                icon={<LoveIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/schools/"
                label="Schools"
                icon={<SchoolIcon />}
              />
            </li>
          </ul>

          <ul className="py-2">
            <li>
              <SidebarLink
                href="/admin/files/"
                label="Files"
                icon={<DocumentIcon />}
              />
            </li>

            <li>
              <SidebarLink
                href="/admin/images/"
                label="Images"
                icon={<ImageIcon />}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
);
