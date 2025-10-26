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
      <EmptyTitle>Sticky Notes</EmptyTitle>
      <EmptyDescription>
        It&#39;s an app for creating and organizing digital sticky notes for reminders and quick
        thoughts.
      </EmptyDescription>
    </Empty>
  );
}
