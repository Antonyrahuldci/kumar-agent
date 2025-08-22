import { Eye, MessageCircleCode, Download } from "lucide-react";
import JSZip from "jszip";
import kumar from "@assets/images/kumarlogo.png";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import Image from "next/image";
import Logout from "../../logout/logout";
import "@assets/own.css";

const TABS = [
  {
    value: "chat",
    label: "Chat",
    icon: MessageCircleCode,
  },
  {
    value: "preview",
    label: "Preview",
    icon: Eye,
  },
];

export function Header({
  tab,
  onNewTab,
  html,
}: {
  tab: string;
  onNewTab: (tab: string) => void;
  html: string;
}) {
  const handleDownload = () => {
    const zip = new JSZip();
    const styleRegex = /<style>([\s\S]*?)<\/style>/;
    const match = html.match(styleRegex);
    let cssContent = "";
    let modifiedHtml = html;

    if (match && match[1]) {
      cssContent = match[1].trim();
      modifiedHtml = html.replace(
        styleRegex,
        '<link rel="stylesheet" href="style.css">'
      );
    }

    zip.file("index.html", modifiedHtml);
    if (cssContent) {
      zip.file("style.css", cssContent);
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "kumar.zip";
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <header className="border-b border-slate-300 bg-[#0A0A0A]  dark:border-neutral-800 px-3 lg:px-6 py-3 flex items-center max-lg:gap-3 justify-between lg:grid lg:grid-cols-3 z-20">
      <div className="flex items-center justify-start gap-3">
        <h1 className="text-neutral-900 dark:text-white text-lg lg:text-xl font-bold flex items-center justify-start">
          <Image
            src={kumar}
            alt="kumar Logo"
            className="size-6 lg:size-11 mr-2 invert-100 dark:invert-0"
          />
          <p className="uiagent-heads">
            KUMAR AI
            <span className="head-text">UI DESIGN AGENT</span>
          </p>
        </h1>
      </div>
      <div className="flex items-center justify-start lg:justify-center gap-1 max-lg:pl-3 flex-1 max-lg:border-l max-lg:border-l-neutral-800">
        {TABS.map((item) => {
          const isActive = tab === item.value;
          return (
            <Button
              key={item.value}
              variant="ghost"
              size="sm"
              onClick={() => onNewTab(item.value)}
              className={classNames(
                "flex items-center gap-2 rounded-full px-3 py-2 transition border",
                {
                  "border-[#7BFF6E] text-[#7BFF6E]": isActive,
                  "border-neutral-700 text-neutral-400": !isActive,
                }
              )}
            >
              {/* Inline SVG */}
              {item.value === "chat" ? (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames("transition", {
                    "stroke-[#7BFF6E]": isActive,
                    "stroke-neutral-400": !isActive,
                  })}
                >
                  <path
                    d="M5.5 8.5H5.51M10 8.5H10.01M14.5 8.5H14.51M5 16V18.3355C5 18.8684 5 19.1348 5.10923 19.2716C5.20422 19.3906 5.34827 19.4599 5.50054 19.4597C5.67563 19.4595 5.88367 19.2931 6.29976 18.9602L8.6852 17.0518C9.1725 16.662 9.4162 16.4671 9.6875 16.3285C9.9282 16.2055 10.1844 16.1156 10.4492 16.0613C10.7477 16 11.0597 16 11.6837 16H14.2C15.8802 16 16.7202 16 17.362 15.673C17.9265 15.3854 18.3854 14.9265 18.673 14.362C19 13.7202 19 12.8802 19 11.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12C1 12.93 1 13.395 1.10222 13.7765C1.37962 14.8117 2.18827 15.6204 3.22354 15.8978C3.60504 16 4.07003 16 5 16Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames("transition", {
                    "stroke-[#7BFF6E]": isActive,
                    "stroke-neutral-400": !isActive,
                  })}
                >
                  <path
                    d="M1.26387 8.7132C1.12769 8.4975 1.05959 8.3897 1.02147 8.2234C0.992842 8.0985 0.992842 7.9015 1.02147 7.7766C1.05959 7.6103 1.12769 7.5025 1.26387 7.2868C2.38928 5.50484 5.73915 1 10.8442 1C15.9492 1 19.2991 5.50484 20.4245 7.2868C20.5607 7.5025 20.6288 7.6103 20.6669 7.7766C20.6955 7.9015 20.6955 8.0985 20.6669 8.2234C20.6288 8.3897 20.5607 8.4975 20.4245 8.7132C19.2991 10.4952 15.9492 15 10.8442 15C5.73915 15 2.38928 10.4952 1.26387 8.7132Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8442 11C12.5011 11 13.8442 9.6569 13.8442 8C13.8442 6.3431 12.5011 5 10.8442 5C9.18728 5 7.84418 6.3431 7.84418 8C7.84418 9.6569 9.18728 11 10.8442 11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span className="hidden md:inline">{item.label}</span>
            </Button>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          className="flex items-center gap-2"
        >
          <Download className="size-4" />
          <span className="hidden md:inline">Download</span>
        </Button>
        <Logout />
      </div>
    </header>
  );
}
