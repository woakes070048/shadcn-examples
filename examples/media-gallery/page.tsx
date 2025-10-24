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
      <EmptyTitle>Media Gallery</EmptyTitle>
      <EmptyDescription>
        It is a page used to display images, videos, and other media in an organized manner.
      </EmptyDescription>
    </Empty>
  );
}
