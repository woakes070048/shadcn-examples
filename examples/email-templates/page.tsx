import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty";
import { LoaderCircleIcon } from "lucide-react";

export default function Page() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LoaderCircleIcon className="-ms-1 animate-spin" size={16} />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>Email Templates</EmptyTitle>
      <EmptyDescription>
        Email templates using Resend are pre-designed email layouts integrated with the Resend API
        for sending and managing emails programmatically.
      </EmptyDescription>
    </Empty>
  );
}
