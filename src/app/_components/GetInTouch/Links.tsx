import { DribbleIcon } from "@/icons/Dribble";
import { FlickrIcon } from "@/icons/Flickr";
import { InstagramIcon } from "@/icons/Instagram";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { MailIcon } from "@/icons/Mail";
import {
  DRIBBLE_LINK,
  FLICKR_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  MAIL_TO_LINK,
} from "@/utils/constants";

export const Links = () => (
  <div className="flex items-center gap-6">
    <a
      className="contacts-link"
      href={INSTAGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon className="contacts-link-icon" />
    </a>

    <a
      className="contacts-link"
      href={DRIBBLE_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <DribbleIcon className="contacts-link-icon" />
    </a>

    <a
      className="contacts-link"
      href={FLICKR_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FlickrIcon className="contacts-link-icon" />
    </a>

    <a
      className="contacts-link"
      href={LINKEDIN_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon className="contacts-link-icon" />
    </a>

    <a
      className="contacts-link"
      href={MAIL_TO_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MailIcon className="contacts-link-icon" />
    </a>
  </div>
);
