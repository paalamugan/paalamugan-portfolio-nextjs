import { useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard() {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = <T1 extends Record<string, unknown>>(text: string, options?: T1) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
}
