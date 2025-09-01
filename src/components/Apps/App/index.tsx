import { Button } from "@heroui/react";
import { CloudDownloadIcon } from "lucide-react";

import ProgressLink from "@/components/ProgressLink";

const App = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <ProgressLink href="/apps/telegram">
        <div
          className="h-24 w-24 transition bg-center bg-cover bg-no-repeat rounded-2xl"
          style={{
            backgroundImage:
              'url("https://cdn.logojoy.com/wp-content/uploads/20220329171710/telegram-app-logo.png")',
          }}
        ></div>
      </ProgressLink>

      <div className="text-center">
        <div className="text-lg font-semibold font-code">Telegram</div>

        <div className="font-code text-sm text-gray-500">1.0.0 (78mb)</div>
      </div>

      <Button radius="full" color="primary">
        <CloudDownloadIcon />
      </Button>
    </div>
  );
};

export default App;
