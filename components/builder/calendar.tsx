import { Builder, withChildren } from "@builder.io/react";
import { Calendar } from "../ui/calendar";
import dynamic from "next/dynamic";
import { iconUriList } from "./helpers/iconDataUri";

export { Calendar };

export function registerCalendar() {
  Builder.registerComponent(
    withChildren(
      dynamic(() => import("./calendar").then((mod) => mod.Calendar))
    ),
    {
      name: "Calendar",
      inputs: [{ name: "date", type: "date" }],
      image: iconUriList.Calendar,
    }
  );
}
