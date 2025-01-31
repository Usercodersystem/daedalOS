import { useProcesses } from "contexts/process";
import { useMemo } from "react";

export type FileReaders = [File, string, FileReader][];

type Dialog = {
  openTransferDialog: (fileReaders: FileReaders) => void;
};

const useTransferDialog = (): Dialog => {
  const { open } = useProcesses();

  return useMemo(
    () => ({
      openTransferDialog: (fileReaders: FileReaders) => {
        if (fileReaders?.length > 0) {
          open("Transfer", { fileReaders, url: "" });
        }
      },
    }),
    [open]
  );
};

export default useTransferDialog;
