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
      <EmptyTitle>Coming Soon</EmptyTitle>
      <EmptyDescription>
        A directory list is a structured display of items, users, or organizations organized for
        easy browsing and access.
      </EmptyDescription>
    </Empty>
  );
}
