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
      <EmptyTitle>Error Pages</EmptyTitle>
      <EmptyDescription>
        Error pages (404, 503, and more) are pages displayed when a website encounters issues like
        missing content, server errors, or restricted access.
      </EmptyDescription>
    </Empty>
  );
}
