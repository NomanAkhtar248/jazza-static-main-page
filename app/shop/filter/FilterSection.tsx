"use client";
import { ChevronDown, LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ReactNode } from "react";

interface FilterSectionProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

const FilterSection = ({ title, icon: Icon, children }: FilterSectionProps) => (
  <Collapsible defaultOpen>
    <CollapsibleTrigger className="group flex w-full items-center justify-between py-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold">
        {!!Icon && <Icon className="h-5 w-5" />} {title}
      </h3>
      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    <CollapsibleContent className="pb-3 pt-1">{children}</CollapsibleContent>
  </Collapsible>
);

export default FilterSection;
