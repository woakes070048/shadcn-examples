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
        These are authentication forms and screens where users enter their credentials to access
        their accounts.
      </EmptyDescription>
    </Empty>
  );
}
