import { SOCIAL_LINKS } from "@/lib/data";
import { TelegramIcon, EmailIcon } from "@/lib/icons";

const ICONS = {
  telegram: TelegramIcon,
  email: EmailIcon,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {(Object.keys(SOCIAL_LINKS) as (keyof typeof SOCIAL_LINKS)[]).map((key) => {
        const { url, label } = SOCIAL_LINKS[key];
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press w-11 h-11 rounded-xl flex items-center justify-center card"
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
