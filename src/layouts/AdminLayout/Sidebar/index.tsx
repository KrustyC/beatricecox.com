import { PieChartIcon } from "../../../components/icons/PieChart";
import { NewsIcon } from "../../../components/icons/News";
import { ImageIcon } from "../../../components/icons/Image";
import { DocumentIcon } from "../../../components/icons/Document";
import { SidebarLink } from "./SidebarLink";
import { RebuildWebsitesButton } from "./RebuildWebsitesButton";

export const Sidebar: React.FC<React.PropsWithChildren<unknown>> = () => (
  <aside
    id="sidebar"
    className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
    aria-label="Sidebar"
  >
    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex flex-col flex-1 px-3 bg-white divide-y space-y-1">
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
                icon={<NewsIcon />}
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

          <ul className="py-8">
            <li>
              <RebuildWebsitesButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
);
